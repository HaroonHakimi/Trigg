"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";

type Props = {};

const Chart = (props: Props) => {
  const chartData = [
    { month: "January", desktop: 86 },
    { month: "February", desktop: 90 },
    { month: "March", desktop: 80 },
    { month: "April", desktop: 70 },
    { month: "May", desktop: 80 },
    { month: "June", desktop: 90 },
    { month: "July", desktop: 80 },
    { month: "August", desktop: 70 },
    { month: "September", desktop: 80 },
    { month: "October", desktop: 90 },
    { month: "November", desktop: 80 },
    { month: "December", desktop: 70 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };
  return (
    <Card className="border-none p-0">
      <CardContent className="p-0">
        <ResponsiveContainer height={300} width={"100%"}>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="desktop"
                type="natural"
                fillOpacity={0.5}
                fill="#FFA500"
                stroke='#FFA500'
              />
            </AreaChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
