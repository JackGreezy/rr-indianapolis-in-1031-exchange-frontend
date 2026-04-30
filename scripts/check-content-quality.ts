import { getLocationSections, getServiceSections, locations, services, wordCountFromSections } from "../lib/site-data";
import fs from "node:fs";

function tokens(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}

function shingles(text: string, size = 7) {
  const words = tokens(text);
  const set = new Set<string>();
  for (let i = 0; i <= words.length - size; i += 1) set.add(words.slice(i, i + size).join(" "));
  return set;
}

function jaccard(a: Set<string>, b: Set<string>) {
  let intersection = 0;
  for (const item of a) if (b.has(item)) intersection += 1;
  const union = a.size + b.size - intersection;
  return union ? intersection / union : 0;
}

const pages = [
  ...services.map((service, index) => ({ type: "service", slug: service.slug, words: wordCountFromSections(getServiceSections(service, index)), text: getServiceSections(service, index).map((section) => section.body).join(" ") })),
  ...locations.map((location, index) => ({ type: "location", slug: location.slug, words: wordCountFromSections(getLocationSections(location, index)), text: getLocationSections(location, index).map((section) => section.body).join(" ") })),
];

let maxSimilarity = { a: "", b: "", score: 0 };
const shingleSets = pages.map((page) => ({ ...page, shingles: shingles(page.text) }));
for (let i = 0; i < shingleSets.length; i += 1) {
  for (let j = i + 1; j < shingleSets.length; j += 1) {
    const score = jaccard(shingleSets[i].shingles, shingleSets[j].shingles);
    if (score > maxSimilarity.score) maxSimilarity = { a: shingleSets[i].slug, b: shingleSets[j].slug, score };
  }
}

const minWords = Math.min(...pages.map((page) => page.words));
const report = { generatedAt: new Date().toISOString(), pageCount: pages.length, serviceCount: services.length, locationCount: locations.length, minWords, maxSimilarity, failingWordCount: pages.filter((page) => page.words < 1200).map((page) => ({ type: page.type, slug: page.slug, words: page.words })) };
fs.mkdirSync("qa-content", { recursive: true });
fs.writeFileSync("qa-content/content-quality-report.json", JSON.stringify(report, null, 2));
fs.writeFileSync("qa-content/content-quality-report.md", `# Content Quality Report\n\n- Generated: ${report.generatedAt}\n- Pages checked: ${report.pageCount}\n- Services: ${report.serviceCount}\n- Locations: ${report.locationCount}\n- Minimum detail-page word count: ${report.minWords}\n- Highest 7-gram Jaccard similarity: ${report.maxSimilarity.score.toFixed(4)} (${report.maxSimilarity.a} vs ${report.maxSimilarity.b})\n- Detail pages below 1200 words: ${report.failingWordCount.length}\n`);
if (report.failingWordCount.length) process.exit(1);
if (report.maxSimilarity.score > 0.65) process.exit(2);
console.log(JSON.stringify(report, null, 2));
