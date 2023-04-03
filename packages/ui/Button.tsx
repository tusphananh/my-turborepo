import * as React from "react";
export interface IButtonProps {
  color?: string;
}
export const Button = (props: IButtonProps) => {
  return (
    <button style={{ background: props.color }}>
      <p>This is shared component sssss</p>
    </button>
  );
};
