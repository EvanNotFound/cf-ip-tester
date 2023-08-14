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
        "w-1/2 h-full overflow-y-auto border border-border rounded-3xl shadow-xl flex flex-col justify-between"
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
      {/*<CardFooter>*/}
      {/*  <p>Card Footer</p>*/}
      {/*</CardFooter>*/}
    </Card>
  );
}
