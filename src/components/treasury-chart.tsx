"use client";

import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "ETH", value: 0, label: "ETH" },
  { name: "CRDD", value: 0, label: "CRDD" },
];

const chartConfig = {
  value: {
    label: "Treasury Assets",
    color: "hsl(var(--primary))",
  },
};

export function TreasuryChart() {
  return (
    <div className="w-full h-[250px] flex flex-col items-center justify-center gap-4">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <BarChart
          data={chartData}
          margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Tooltip
            cursor={{ fill: "hsl(var(--primary) / 0.1)" }}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={60}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.5)"}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
      <p className="text-xs text-muted-foreground text-center">
        Live treasury snapshot from Arbitrum • Updated every 5 minutes
      </p>
    </div>
  );
}
