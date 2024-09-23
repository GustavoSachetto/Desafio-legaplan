'use client';

import SessionContext from "@/hooks/context";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionContext>
      {children}
    </SessionContext>
  )
}