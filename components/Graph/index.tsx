import React from "react";
import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg";
import * as shape from "d3-shape";
import { interpolate, Extrapolate } from "react-native-reanimated";
import { useBackgroundColor } from "../../hooks";

const scale = (x: number, input: number[], output: number[]) => {
  "worklet";
  return interpolate(x, input, output, Extrapolate.CLAMP);
};

const buildLinePath = (
  data: [number, number][],
  range: { x: number[]; y: number[] }
) => {
  const domain = {
    x: [Math.min(...data.map(([x]) => x)), Math.max(...data.map(([x]) => x))],
    y: [
      Math.min(...data.map(([, y]) => y)),
      Math.max(...data.map(([, y]) => y)),
    ],
  };

  return shape
    .line()
    .x(([x]) => scale(x, domain.x, range.x))
    .y(([, y]) => scale(y, domain.y, range.y))
    .curve(shape.curveBasis)(data) as string;
};

const buildRange = (height: number, width: number) => {
  return {
    x: [0, width],
    y: [height, 0],
  };
};

export interface LineGraph {
  width: number;
  height: number;
  data: [number, number][];
}

export const LineGraph = ({ height, width, data }: LineGraph) => {
  const background = useBackgroundColor();

  const range = buildRange(height, width);
  const d = buildLinePath(data, range);

  return (
    <Svg {...{ width, height }}>
      <Defs>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
          <Stop stopColor="#CDE3F8" offset="0%" />
          <Stop stopColor="transparent" offset="80%" />
          <Stop stopColor="transparent" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path fill="transparent" stroke="#367be2" strokeWidth={5} d={d} />
      <Path
        d={`${d}  L ${width} ${height} L 0 ${height}`}
        fill="url(#gradient)"
      />
    </Svg>
  );
};
