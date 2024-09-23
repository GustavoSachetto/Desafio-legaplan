import ButtonTrash from "@/components/ui/List/ButtonTrash";
import Checkbox from "@/components/ui/Form/Checkbox";
import Item from "@/components/ui/List/Item";
import { useSession } from "@/hooks/context";
import { TaskProps } from "@/types/Task";
import { useRouter } from "next/navigation";

type ItemTaskProps = TaskProps & {
  modalState: (status: boolean) => void
}

export default function ItemTask({ id, title, finished, modalState }: ItemTaskProps) {
  const router = useRouter()

  const { tasks, setTasks } = useSession()

  const finishedTask: (id: number) => void = (id) => {
    const newTasks = [...tasks]

    newTasks.map((task: TaskProps) => {
      return (
        task.id === id ? (task.finished = !task.finished) : task
      )
    })

    setTasks(newTasks)
  }

  const handleClick = () => {
    router.push(`?id=${id.toString()}`)
    modalState(true)
  }

  return (
    <Item>
      <Checkbox 
        id={title + id} 
        name={title + id}
        label={title}
        checked={finished} 
        onChange={() => finishedTask(id)} 
      />
      <ButtonTrash onClickButton={handleClick} />
    </Item>
  )
}