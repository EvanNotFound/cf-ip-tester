"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PingTable from "@/components/ping-table";
import Link from "next/link";

export type PanelProps = {
  ipLimit: number;
  maxLatency: number;
  trigger: number;
  regexPattern: string;
  includeRanges: string[];
  excludeRanges: string[];
};

export default function ResultsPanel(props: PanelProps) {
  return (
    <Card
      className={
        "w-full sm:w-1/2 h-full overflow-y-auto border border-border rounded-3xl shadow-xl flex flex-col justify-between"
      }
    >
      <CardHeader
        className={
          "bg-white/60 backdrop-blur-lg rounded-t-4xl w-full pb-4 border-b border-border"
        }
      >
        <CardTitle>Results</CardTitle>
        <CardDescription>Scan Results</CardDescription>
      </CardHeader>
      <CardContent className={"overflow-y-auto h-full"}>
        <PingTable
          ipLimit={props.ipLimit}
          maxLatency={props.maxLatency}
          trigger={props.trigger}
          regexPattern={props.regexPattern}
          includeRanges={props.includeRanges}
          excludeRanges={props.excludeRanges}
        />
      </CardContent>
      <CardFooter className={"p-0 w-full border-t border-border px-6 py-2"}>
        <h2
          className={
            "w-full text-right text-sm text-gh-text-secondary font-normal"
          }
        >
          Made with ❤️ by{" "}
          <Link href={"https://evan.studio"} className={"hover:underline"}>
            Evan
          </Link>
        </h2>
      </CardFooter>
    </Card>
  );
}
