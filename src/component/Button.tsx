// type ButtonProps = {
//   handleClick: () => void;
// };

import React from "react";

type eventhandleClick = {
  eventhandleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export const Button = (props: eventhandleClick) => {
  return (
    <div>
      <button onClick={event=> props.eventhandleClick(event, 1)}>Click</button>
    </div>
  );
};
