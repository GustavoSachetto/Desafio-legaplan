import Providers from "@/providers/providers";
import { InterTight } from "@/constants/Fonts";
import type { Metadata } from "next";
import "@/styles/components/app.scss";

export const metadata: Metadata = {
  title: "Focal Point | Todo List",
  description: "Aplicação em Next JS para desafio técnico",
  robots: "index, follow",
  authors: {
    name: "Gustavo Sachetto da Cruz"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={InterTight.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
