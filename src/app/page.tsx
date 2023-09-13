"use client";

import { Header } from "@/components/header";
import InputForm from "@/components/input-form";
import { formSchema } from "@/components/input-form";
import * as z from "zod";
import ResultsPanel from "@/components/results-panel";
import React, { useEffect, useState } from "react";
import { useButtonContext } from "@/app/context/button";

export default function Home() {
  const [ipLimit, setIPLimit] = useState(20);
  const [maxLatency, setMaxLatency] = useState(400);
  const [triggerTestIPs, setTriggerTestIPs] = useState(0);
  const [includeRanges, setIncludeRanges] = useState([""]);
  const [excludeRanges, setExcludeRanges] = useState([""]);
  const [regexPattern, setRegexPattern] = useState("");

  const { setIsScanning } = useButtonContext();

  const scanIPs = (values: z.infer<typeof formSchema>) => {
    setIPLimit(values.ipNumber);
    setMaxLatency(values.maxLatency);
    if (values.regexPattern) {
      setRegexPattern(values.regexPattern);
    }
    if (values.includeRanges) {
      setIncludeRanges(values.includeRanges.split(","));
    }
    if (values.excludeRanges) {
      setExcludeRanges(values.excludeRanges.split(","));
    }

    setTriggerTestIPs(triggerTestIPs + 1);
    setIsScanning(true);
  };

  return (
    <>
      <Header />
      <main
        className={
          "px-8 sm:h-screen sm:px-16 lg:px-32 pt-32 pb-12 flex gap-12 sm:gap-16 lg:gap-32 flex-col sm:flex-row justify-center"
        }
      >
        <InputForm onSubmit={scanIPs} />
        <ResultsPanel
          ipLimit={ipLimit}
          maxLatency={maxLatency}
          trigger={triggerTestIPs}
          regexPattern={regexPattern}
          includeRanges={includeRanges}
          excludeRanges={excludeRanges}
        />
      </main>
    </>
  );
}
