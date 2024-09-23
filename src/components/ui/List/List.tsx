import { ReactNode } from "react";
import '@/styles/components/ui/list/list.scss';

type ListProps = {
  children: ReactNode,
  name: string
}

export default function List({ children, name }: ListProps) {
  return (
    <div className="list">
      <span className="list-name">{name}</span>
      <ul className="container-list">{children}</ul>
    </div>
  )
}