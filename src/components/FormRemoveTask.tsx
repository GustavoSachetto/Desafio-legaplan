import ContainerButton from "@/components/ui/ContainerButton";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form/Form";
import { useSession } from "@/hooks/context";
import { TaskProps } from "@/types/Task";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type FormAddTaskProps = {
  backAction: () => void
}

export default function FormRemoveTask({ backAction }: FormAddTaskProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { tasks, setTasks } = useSession()

  const removeTask: (id: string | null) => void = (id) => {
    const newTasks = [...tasks]
    const taskRemove = typeof(id) === "string" ? id : ""

    const filteredTasks: TaskProps[] = newTasks.filter((task: TaskProps) => {
      return task.id !== parseInt(taskRemove) ? task : null
    })

    setTasks(filteredTasks)
  }

  const handleClick = () => {
    router.push(pathname)
    backAction()
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    removeTask(searchParams.get('id'))
    router.push(pathname)
    backAction()
  }

  return (
    <Form name="formRemoveTask" onSubmit={handleSubmit}>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <ContainerButton>
        <Button type="button" mystyled="primary" onClick={handleClick}>
          Cancelar
        </Button>
        <Button type="submit" mystyled="alert" form="formRemoveTask">
          Deletar
        </Button>
      </ContainerButton>
    </Form>
  )
}