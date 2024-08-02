"use client";

import { Status } from "@prisma/client";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, LabelList, CartesianGrid, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";

interface dataProps {
  data: dataElements[];
}

interface dataElements {
  name: Status;
  total: number;
}

const DashChart = ({ data }: dataProps) => {
  // Calculate the maximum value for the Y-axis
  const maxValue = Math.max(...data.map(item => item.total));

  // Create an array of ticks for the Y-axis
  const ticks = Array.from({ length: maxValue + 1 }, (_, i) => i);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ticket Counts</CardTitle>
        <CardDescription>Overview of Ticket Status</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 'dataMax']} // Ensure the axis starts from 0
              ticks={ticks} // Explicitly set ticks to show every integer value
            />
            <Bar dataKey="total" fill="#AFE1AF" radius={[4, 4, 0, 0]} minPointSize={5}>
              <LabelList
                dataKey="total"
                position="top" // Position the label at the top
                offset={12} // Adjust offset to ensure visibility
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Legend
              verticalAlign="bottom" // Position the legend at the bottom
              height={36} // Height of the legend box
              iconType="circle" // Shape of the legend icon
              formatter={(value) => <span style={{ color: '#888888' }}>{value}</span>} // Custom legend text styling
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Ticket statistics for this period
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total tickets by status
        </div>
      </CardFooter>
    </Card>
  );
};

export default DashChart;
