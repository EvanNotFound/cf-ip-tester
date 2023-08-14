"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@/components/ui/badge";
import { ReloadIcon, StopIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { useButtonContext } from "@/app/context/button";

export const formSchema = z.object({
  ipNumber: z.coerce.number().min(3).max(50),
  maxLatency: z.coerce.number().min(0).max(5000),
  regexPattern: z.string().min(0).max(50).optional(),
  includeRanges: z.string().min(0).max(100).optional(),
  excludeRanges: z.string().min(0).max(100).optional(),
});

export default function InputForm({ onSubmit }: any) {
  const { isScanning, setCancelScan } = useButtonContext();
  const scanIPs = onSubmit;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ipNumber: 20,
      maxLatency: 400,
      regexPattern: "",
      includeRanges: "",
      excludeRanges: "",
    },
  });

  return (
    <div className={"w-1/2"}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(scanIPs)}
          className="h-full flex flex-col justify-between gap-12"
        >
          <section className={"space-y-7"}>
            <div className={"flex flex-row gap-8"}>
              <div className={"w-1/2"}>
                <FormField
                  control={form.control}
                  name={"ipNumber"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IP Display Limit</FormLabel>
                      <FormControl>
                        <Input placeholder="20" type={"number"} {...field} />
                      </FormControl>
                      <FormDescription>
                        Limit the number of IPs displayed in the results.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className={"w-1/2"}>
                <FormField
                  control={form.control}
                  name={"maxLatency"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Max Allowed Latency</FormLabel>
                      <FormControl>
                        <div
                          className={"flex flex-row w-full items-center gap-2"}
                        >
                          <Input
                            placeholder="400"
                            type={"number"}
                            {...field}
                            className={""}
                          />
                          <div
                            className={
                              "px-2 border-border border shadow-sm rounded-md py-[7px] flex items-center  bg-gh-bg"
                            }
                          >
                            <span className={"text-gh-text-secondary text-sm"}>
                              ms
                            </span>
                          </div>
                        </div>
                      </FormControl>
                      <FormDescription>
                        Set the maximum allowed latency in milliseconds.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name={"regexPattern"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"flex flex-row items-center gap-3"}>
                    Regex Filter
                    <Badge
                      variant={"outline"}
                      className={"font-normal text-gh-text-secondary"}
                    >
                      Optional
                    </Badge>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="^104\.17\.|^141\."
                      type={"text"}
                      {...field}
                      className={""}
                    />
                  </FormControl>
                  <FormDescription>
                    Filter the results by a regular expression.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"includeRanges"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"flex flex-row items-center gap-3"}>
                    Only Include IPs in Range
                    <Badge
                      variant={"outline"}
                      className={"font-normal text-gh-text-secondary"}
                    >
                      Optional
                    </Badge>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="104,141"
                      type={"text"}
                      {...field}
                      className={""}
                    />
                  </FormControl>
                  <FormDescription>
                    Only include IPs in the specified range. Separate multiple
                    ranges with a comma.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"excludeRanges"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"flex flex-row items-center gap-3"}>
                    Exclude IPs in Range
                    <Badge
                      variant={"outline"}
                      className={"font-normal text-gh-text-secondary"}
                    >
                      Optional
                    </Badge>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="8,103,164.2"
                      type={"text"}
                      {...field}
                      className={""}
                    />
                  </FormControl>
                  <FormDescription>
                    Exclude IPs in the specified range. Separate multiple ranges
                    with a comma.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <div className={"flex flex-row gap-2"}>
            <Button
              type="submit"
              className={
                "w-full transition-all shadow-lg hover:shadow-xl active:shadow-sm "
              }
              size={"lg"}
              disabled={isScanning}
            >
              {isScanning ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                "Scan"
              )}
            </Button>
            {/*{isScanning && (*/}
            {/*  <Button*/}
            {/*    type={"button"}*/}
            {/*    id={"stop-scan"}*/}
            {/*    className={`${*/}
            {/*      isScanning ? "w-2/6" : "w-0"*/}
            {/*    } whitespace-nowrap transition-all shadow-lg hover:shadow-xl active:shadow-sm `}*/}
            {/*    size={"lg"}*/}
            {/*    variant={"destructive"}*/}
            {/*    onClick={cancelScan}*/}
            {/*  >*/}
            {/*    <StopIcon className="mr-2 h-4 w-4" />*/}
            {/*    Cancel Scan*/}
            {/*  </Button>*/}
            {/*)}*/}
          </div>
        </form>
      </Form>
    </div>
  );
}
