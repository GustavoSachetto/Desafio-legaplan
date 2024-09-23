'use client';

import ContainerButton from "@/components/ui/ContainerButton";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form/Form";
import Input from "@/components/ui/Form/Input";
import Modal from "@/components/ui/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setName(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.replace(`/todo/${name}`)
  }

  return (
    <Modal title="Entrar" status={true}>
      <Form name="formUserName" onSubmit={handleSubmit}>
        <label htmlFor="userName">Nome</label>
        <Input 
          type="text"
          name="userName"
          placeholder="Digite"
          onChange={handleChange}
        />
        <ContainerButton>
          <Button mystyled="default">Acessar projeto</Button>
        </ContainerButton>
      </Form>
    </Modal>
  )
}
