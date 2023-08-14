import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function NavAbout() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        About
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About</DialogTitle>
          <DialogDescription>
            About this Cloudflare IP Ping Tester
          </DialogDescription>
        </DialogHeader>
        <p className={"text-gh-text-secondary"}>
          This is a simple tool to test the latency between your device and
          Cloudflare IPs.
        </p>
        <p className={"text-gh-text-secondary"}>
          My Github:{" "}
          <Link
            href={"https://github.com/EvanNotFound"}
            className={"underline"}
          >
            EvanNotFound
          </Link>
          <br />
          My Portfolio:{" "}
          <Link href={"https://evan.studio"} className={"underline"}>
            Evan
          </Link>
          <br />
          My Blog:{" "}
          <Link href={"https://ohevan.com"} className={"underline"}>
            EvanNotFound&#39;s Blog
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
}
