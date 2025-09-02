"use client";

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Launch", value: 0 },
  { month: "Q1", value: 1500 },
  { month: "Q2", value: 3000 },
  { month: "Q3", value: 5000 },
  { month: "Q4", value: 8000 },
  { month: "Future", value: 15000 },
];

const chartConfig = {
  value: {
    label: "Treasury Value (Projected)",
    color: "hsl(var(--primary))",
  },
};

export function TreasuryChart() {
  return (
    <div className="w-full h-[300px]">
        <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart
                data={chartData}
                margin={{
                left: 12,
                right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value}
                />
                <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent 
                        indicator="dot"
                        formatter={(value, name, props) => {
                          if (typeof value === 'number' && value > 0) {
                            return ["Projected growth", null];
                          }
                          return ["$0", null];
                        }}
                    />}
                />
                <defs>
                    <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <Area
                    dataKey="value"
                    type="natural"
                    fill="url(#fillValue)"
                    stroke="var(--color-value)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    </div>
  );
}
