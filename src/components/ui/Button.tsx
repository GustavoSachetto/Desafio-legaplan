import React from "react";
import { ReactNode } from "react";
import { InterTight } from "@/constants/Fonts";
import '@/styles/components/ui/buttons.scss';

type ButtonProps = React.ComponentProps<"button"> & {
  children: ReactNode,
  mystyled: "default" | "primary" | "alert",
  onClick?: () => void
};

export default function Button(props: ButtonProps) {
  return (
    <button 
      {...props}
      type={props.type}
      className={`button-${props.mystyled} ${InterTight.className}`} 
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}