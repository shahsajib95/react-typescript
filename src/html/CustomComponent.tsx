import React from "react";
import { Greet } from "../component/Greet";

export const CustonComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
