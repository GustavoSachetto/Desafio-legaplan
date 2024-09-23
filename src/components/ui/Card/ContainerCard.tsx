import { PropsWithChildren } from "react";
import '@/styles/components/ui/card/container-card.scss';

export default function ContainerCard({ children }: PropsWithChildren) {
  return (
    <div className="container-card">
      {children}
    </div>
  )
}