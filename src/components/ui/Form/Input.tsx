import React from "react";
import { InterTight } from "@/constants/Fonts";
import '@/styles/components/ui/form/input.scss';

export default function Input(props: React.ComponentProps<"input">) {
  return (
    <input 
      {...props}
      type={props.type}
      id={props.name} 
      name={props.name} 
      placeholder={props.placeholder} 
      className={InterTight.className}
      onChange={props.onChange}
      required 
    />
  )
}