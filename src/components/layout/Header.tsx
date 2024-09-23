import ImageLogo from '@/assets/images/logo.svg';
import Image from "next/image";
import { DateFormat } from "@/utils/dateFormatter";
import Link from "next/link";


type NameProp = {
  name?: string
}

export default function Header({ name }: NameProp) {
  return (
    <header>
      <Link href="/">
        <Image src={ImageLogo} alt="Logotipo" priority={true} />
      </Link>
      <span className="welcome">Bem vindo de volta, {name}</span>
      <span className="date">{DateFormat}</span>
    </header>
  )
}