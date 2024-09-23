import { ReactNode } from 'react';
import '@/styles/components/ui/modal.scss';

type ModalProps = {
  title: string,
  status: boolean,
  children: ReactNode
}

export default function Modal({ title, children, status }: ModalProps) {
  return status == true && (
    <>
      <div className="modal">
        <h2>{title}</h2>
        <div className="content-modal">
          {children}
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </>
  ) 
}