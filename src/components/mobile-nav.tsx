import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import NavIpList from "@/components/nav-ip-list";
import NavAbout from "@/components/nav-about";

export default function MobileNav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"outline"} size={"icon"}>
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={
            "rounded-none translate-y-7 w-screen border-x-0 bg-white/80 backdrop-blur-lg"
          }
        >
          <div className={"px-1 py-3 pb-3 flex items-center flex-col gap-3"}>
            <NavIpList />
            <NavAbout />
            <Link
              href={"https://github.com/EvanNotFound/cf-ip-tester"}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Github
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
