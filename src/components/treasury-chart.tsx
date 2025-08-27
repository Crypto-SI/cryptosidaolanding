"use client";

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", value: 8200000 },
  { month: "February", value: 9100000 },
  { month: "March", value: 9500000 },
  { month: "April", value: 10200000 },
  { month: "May", value: 11500000 },
  { month: "June", value: 12458039 },
];

const chartConfig = {
  value: {
    label: "Treasury Value",
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
                tickFormatter={(value) => value.slice(0, 3)}
                />
                <Tooltip
                    cursor={false}
                    content={<ChartTooltipContent 
                        indicator="dot"
                        formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(Number(value))}
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
