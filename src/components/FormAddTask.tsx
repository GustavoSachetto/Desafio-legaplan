import ContainerButton from "@/components/ui/ContainerButton";
import Input from "@/components/ui/Form/Input";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form/Form";
import { useSession } from "@/hooks/context";
import { useState, useEffect } from "react";
import { TaskProps } from "@/types/Task";

type FormAddTaskProps = {
  backAction: () => void
}

export default function FormAddTask({ backAction }: FormAddTaskProps) {
  const { tasks, setTasks } = useSession()

  const [formData, setFormData] = useState<TaskProps>({
    id: 1,
    title: "",
    finished: false
  })

  useEffect(() => {
    const lastId: number = tasks.length > 0 
      ? (tasks[tasks.length - 1]).id
      : 0

    setFormData({
      id: lastId + 1, 
      title: formData.title,
      finished: formData.finished
    })
  }, [tasks])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTasks([...tasks, formData])
    backAction()
  }

  return (
    <Form name="formAddTask" onSubmit={handleSubmit}>
      <label htmlFor="title">Título</label>
      <Input 
        type="text" 
        name="title" 
        placeholder="Digite" 
        onChange={handleChange}
        required 
      />
      <ContainerButton>
        <Button type="button" mystyled="primary" onClick={() => backAction()}>
          Cancelar
        </Button>
        <Button type="submit" mystyled="default" form="formAddTask">
          Adicionar
        </Button>
      </ContainerButton>
    </Form>
  )
}