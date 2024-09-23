import { PropsWithChildren } from "react";
import '@/styles/components/ui/container-button.scss';

export default function ContainerButton({ children }: PropsWithChildren) {
  return (
    <div className="container-button">
      {children}
    </div>
  )
}