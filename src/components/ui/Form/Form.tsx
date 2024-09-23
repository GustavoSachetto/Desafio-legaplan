import { ReactNode } from "react";
import '@/styles/components/ui/form/form.scss';

type FormProps = {
  name: string,
  children: ReactNode,
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ name, children, onSubmit }: FormProps) {
  return (
    <form id={name} className="container-form" onSubmit={(e) => onSubmit(e)}>
      {children}
    </form>
  )
}