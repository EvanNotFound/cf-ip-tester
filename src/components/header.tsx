import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import NavIpList from "@/components/nav-ip-list";
import NavAbout from "@/components/nav-about";
import MobileNav from "@/components/mobile-nav";

export function Header({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "fixed left-0 top-0 w-screen bg-white/50 backdrop-blur-lg flex justify-between items-center space-x-4 lg:space-x-6 border-b-2 border-border px-6 sm:px-10 py-8",
        className,
      )}
    >
      <div className={"text-gh-text-primary font-bold text-lg"}>
        <Link href={"/"}>
          <h1>Cloudflare IP Ping Tester</h1>
        </Link>
      </div>
      <nav className={" items-center space-x-4 lg:space-x-6 hidden sm:flex"}>
        <Link
          href={"/"}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Tester
        </Link>
        <NavIpList />
        <NavAbout />
        <Link
          href={"https://github.com/EvanNotFound/cf-ip-tester"}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <GitHubLogoIcon />
        </Link>
      </nav>
      <MobileNav className={"block sm:hidden"} />
    </nav>
  );
}
