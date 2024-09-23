'use client';

import Button from "@/components/ui/Button";
import List from "@/components/ui/List/List";
import Modal from "@/components/ui/Modal";
import Card from "@/components/ui/Card/Card";
import ContainerCard from "@/components/ui/Card/ContainerCard";
import FormAddTask from "@/components/FormAddTask";
import FormRemoveTask from "@/components/FormRemoveTask";
import ItemTask from "@/components/ItemTask";
import { useSession } from "@/hooks/context";
import { ReactNode, useState } from "react";

export default function CardTask() {
  const [modalAddState, setModalAddState] = useState(false)
  const [modalRemoveState, setModalRemoveState] = useState(false)
  
  const { tasks } = useSession()

  const getTasks: (status?: boolean) => ReactNode = (status = false) => {
    return tasks.length > 0 ? tasks.map((task) => {
      return task.finished === status && (
        <ItemTask 
          id={task.id} 
          title={task.title} 
          finished={task.finished} 
          modalState={() => setModalRemoveState(true)} 
          key={task.id} 
        /> 
      )
    }) : (
      <span>Sem tarefas</span>
    )
  }

  return (
    <Card>
      <ContainerCard>
        <List name="Suas tarefas de hoje">
          { getTasks() }
        </List>
        <List name="Tarefas finalizadas">
          { getTasks(true) }
        </List>
      </ContainerCard>

      <Modal title="Nova tarefa" status={modalAddState}>
        <FormAddTask backAction={() => setModalAddState(false)} />
      </Modal>
      
      <Modal title="Deletar tarefa" status={modalRemoveState}>
        <FormRemoveTask backAction={() => {setModalRemoveState(false)}} />
      </Modal>

      <Button type="button" mystyled="default" onClick={() => {setModalAddState(true)}}>
        Adicionar nova tarefa
      </Button>
    </Card>
  )
}