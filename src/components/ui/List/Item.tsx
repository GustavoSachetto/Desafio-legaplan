import { PropsWithChildren } from "react";
import '@/styles/components/ui/list/item.scss';

export default function Item({ children }: PropsWithChildren) {
  return (
    <li className="list-item">
      {children}
    </li>
  )
}