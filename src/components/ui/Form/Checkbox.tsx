import React from "react";
import '@/styles/components/ui/form/checkbox.scss';

type CheckboxProps = React.ComponentProps<"input"> & {
  label: string
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <div className="custom-checkbox">
      <input 
        id={props.name} 
        name={props.name}
        type="checkbox" 
        checked={props.checked} 
        onChange={props.onChange}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  )
}