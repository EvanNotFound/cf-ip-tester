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
import { useEffect, useState } from "react";

import { useButtonContext } from "@/app/context/button";

import { PanelProps } from "@/components/results-panel";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function PingTable({
  ipLimit,
  maxLatency,
  trigger,
  excludeRanges,
  includeRanges,
  regexPattern,
}: PanelProps) {
  const [latencies, setLatencies] = useState({});
  const resultsLimit = ipLimit;
  const [workingIPsDisplay, setWorkingIPsDisplay] = useState<number>(0);
  const ipList = cfIpList;
  const { isScanning, setIsScanning, cancelScan, setCancelScan } =
    useButtonContext();

  const testIPs = async (ipList: string[]) => {
    let workingIPs = 0;
    if (regexPattern !== "") {
      const regex = new RegExp(regexPattern);
      ipList = ipList.filter((ip) => regex.test(ip));
    }

    console.log(includeRanges, excludeRanges);

    if (includeRanges[0] !== "" && excludeRanges[0] !== "") {
      alert(
        "You can't use both include and exclude ranges at the same time. Please choose one or the other.",
      );
    } else if (includeRanges[0] !== "") {
      const regex = new RegExp(
        includeRanges
          .map((c) => {
            return "^" + c.replaceAll(".", "\\.").replaceAll("/", "\\/");
          })
          .join("|"),
      );
      ipList = ipList.filter((ip) => regex.test(ip));
    } else if (excludeRanges[0] !== "") {
      const regex = new RegExp(
        excludeRanges
          .map((c) => {
            return "^" + c.replaceAll(".", "\\.").replaceAll("/", "\\/");
          })
          .join("|"),
      );
      ipList = ipList.filter((ip) => !regex.test(ip));
    }

    for (const ip of ipList) {
      console.log(cancelScan);

      let testResult = 0;
      const url = `https://${ip}/__down`;
      const startTime = performance.now();
      const timeoutDuration = 1.5 * maxLatency; // Adjust as needed
      const controller = new AbortController();
      for (let i = 0; i < 5; i++) {
        const timeoutId = setTimeout(() => {
          controller.abort();
        }, timeoutDuration);

        try {
          const response = await fetch(url, {
            signal: controller.signal,
          });

          testResult++;
        } catch (error: any) {
          if (error.name === "AbortError") {
            //
          } else {
            testResult++;
          }
        }
        clearTimeout(timeoutId);
      }

      const latency = Math.floor((performance.now() - startTime) / 5);

      if (testResult === 5 && latency < maxLatency) {
        setWorkingIPsDisplay((prevWorkingIPs) => prevWorkingIPs + 1);
        workingIPs++;

        setLatencies((prevLatencies) => {
          const newLatencies = { ...prevLatencies, [ip]: latency };
          const sortedLatencies = Object.entries(newLatencies).sort(
            // @ts-ignore
            (a, b) => a[1] - b[1],
          );
          return Object.fromEntries(sortedLatencies);
        });
      }

      if (workingIPs >= resultsLimit) {
        setIsScanning(false);
        break;
      }
    }
  };

  useEffect(() => {
    if (trigger) {
      setLatencies({});
      setWorkingIPsDisplay(0);
      testIPs(ipList)
        .then(() => {
          setIsScanning(false); // This will be called after testIPs completes
        })
        .catch((error) => {
          console.error("Error while testing IPs:", error);
          setIsScanning(false); // Ensure setIsScanning is set to false even on error
        });
    }
  }, [trigger]);

  return (
    <Table>
      <TableCaption>
        {isScanning ? (
          <>
            Scanning... ({workingIPsDisplay} / {resultsLimit} IPs found)
          </>
        ) : (
          "Please click the button to start scanning."
        )}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Number</TableHead>
          <TableHead>IP Address</TableHead>
          <TableHead className="text-right">Latency</TableHead>
        </TableRow>
      </TableHeader>
      {/*<TableBody>*/}
      {/*  <TableRow>*/}
      {/*    <TableCell>*/}
      {/*      <Badge variant={"outline"} className={"text-gh-text-secondary"}>*/}
      {/*        1*/}
      {/*      </Badge>*/}
      {/*    </TableCell>*/}
      {/*    <TableCell className="font-medium">114.514.191.198</TableCell>*/}
      {/*    <TableCell className="text-right">92ms</TableCell>*/}
      {/*  </TableRow>*/}
      {/*</TableBody>*/}
      {Object.keys(latencies).map((ip, index) => (
        <TableBody key={index}>
          <TableRow>
            <TableCell>
              <Badge variant={"outline"} className={"text-gh-text-secondary"}>
                {index + 1}
              </Badge>
            </TableCell>
            <TableCell className="font-medium">
              {ip.replace(/\/\d+$/, "")}
            </TableCell>
            {/*@ts-ignore*/}
            <TableCell className="text-right">{latencies[ip]}ms</TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
}
