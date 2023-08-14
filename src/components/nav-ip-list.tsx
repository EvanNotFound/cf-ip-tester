import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cfIpList } from "@/lib/cf-ip-list";

export default function NavIpList() {
  return (
    <Sheet>
      <SheetTrigger
        className={
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        }
      >
        IP List
      </SheetTrigger>
      <SheetContent className={"overflow-y-auto"}>
        <SheetHeader>
          <SheetTitle>Full list of Cloudflare IPs</SheetTitle>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Number</TableHead>
                <TableHead className={"text-right"}>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/*<TableRow>*/}
              {/*  <TableCell>*/}
              {/*    <Badge*/}
              {/*      variant={"outline"}*/}
              {/*      className={"text-gh-text-secondary"}*/}
              {/*    >*/}
              {/*      1*/}
              {/*    </Badge>*/}
              {/*  </TableCell>*/}
              {/*  <TableCell className="font-medium text-right  text-gh-text-primary">*/}
              {/*    114.514.191.198*/}
              {/*  </TableCell>*/}
              {/*</TableRow>*/}
              {cfIpList.map((ip, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge
                      variant={"outline"}
                      className={"text-gh-text-secondary"}
                    >
                      {index + 1}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium text-right text-gh-text-primary">
                    {ip}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
