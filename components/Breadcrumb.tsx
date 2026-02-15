import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-gray-200"
    >
      <div className="container py-3">
        <ol className="flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap">
          <li>
            <Link
              href="/"
              className="text-ink/60 hover:text-teal transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-ink/30">/</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-ink/60 hover:text-teal transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-heading font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
