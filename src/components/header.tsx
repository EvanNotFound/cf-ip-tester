import Link from "next/link";

import { cn } from "@/lib/utils";

export function Header({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "fixed left-0 top-0 w-screen bg-white/50 backdrop-blur-lg flex justify-between items-center space-x-4 lg:space-x-6 border-b-2 border-border px-10 py-8",
        className,
      )}
    >
      <div className={"text-gh-text-primary font-bold text-lg"}>
        <h1>Cloudflare IP Ping Tester</h1>
      </div>
      <div className={"flex items-center space-x-4 lg:space-x-6"}>
        <Link
          href={"/examples/dashboard"}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </Link>
        <Link
          href={"/examples/dashboard"}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Customers
        </Link>
        <Link
          href={"/examples/dashboard"}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Products
        </Link>
        <Link
          href={"/examples/dashboard"}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Settings
        </Link>
      </div>
    </nav>
  );
}
