import React from "react";
import { Box, Heading } from "native-base";
import { LineGraph } from "../components";

const paddingX = "3";

const data: [number, number][] = [
  { x: new Date(2020, 5, 1), y: 230 },
  { x: new Date(2020, 5, 2), y: 102 },
  { x: new Date(2020, 5, 3), y: 30 },
  { x: new Date(2020, 5, 4), y: 0 },
  { x: new Date(2020, 5, 5), y: 120 },
  { x: new Date(2020, 5, 6), y: 301 },
].map((p) => [p.x.getTime(), p.y]);

export const Dashboard = () => {
  return (
    <Box flex="1" pt="16" px={paddingX}>
      <Heading>Welcome back,</Heading>
      <Heading mb="24">Zack 👋</Heading>
      <LineGraph data={data} width={350} height={200} />
    </Box>
  );
};
