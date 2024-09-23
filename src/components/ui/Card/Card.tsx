import { PropsWithChildren } from "react";
import '@/styles/components/ui/card/card.scss';

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="card">
      {children}
    </div>
  )
}