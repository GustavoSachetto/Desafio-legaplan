import ImageTrash from '@/assets/images/trash.svg';
import Image from "next/image";
import '@/styles/components/ui/list/button-trash.scss';

type ButtonProp = {
  onClickButton: () => void
}

export default function ButtonTrash({ onClickButton }: ButtonProp) {
  return (
    <button className="button-trash" onClick={onClickButton}>
      <Image src={ImageTrash} alt="Trash" priority={true} />
    </button>
  )
}