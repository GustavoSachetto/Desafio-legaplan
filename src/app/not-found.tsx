'use client';

import ContainerButton from "@/components/ui/ContainerButton";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form/Form";
import Modal from "@/components/ui/Modal";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.replace('/')
  }

  return (
    <Modal title="Página não encontrada!" status={true}>
      <p>A página que você está procurando não existe.</p>
      <Form name="formUserName" onSubmit={handleSubmit}>
        <ContainerButton>
          <Button mystyled="alert">Voltar para a home</Button>
        </ContainerButton>
      </Form>
    </Modal>
  )
}