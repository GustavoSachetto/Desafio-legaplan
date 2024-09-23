'use client';

import { type PropsWithChildren, useContext, createContext, Dispatch, SetStateAction } from "react";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { TaskProps } from "@/types/Task";

const TasksContext = createContext<{
  tasks: Array<TaskProps>,
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}>({
  tasks: [],
  setTasks: () => {}
});

function initialTasks(): TaskProps[] {
  return [
    {  
      id: 1,  
      title: "Lavar as mãos",
      finished: false
    },
    {  
      id: 2,  
      title: "Fazer um bolo",
      finished: false
    },
    {  
      id: 3,  
      title: "Lavar a louça",
      finished: false
    },
    {  
      id: 4,  
      title: "Levar o lixo para fora",
      finished: true
    },
  ]
} 

export function useSession() {
  const value = useContext(TasksContext);
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

  return value;
}

export default function SessionContext({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useLocalStorage('tasks', initialTasks(), true);

  return (
    <TasksContext.Provider value={{ setTasks, tasks }}>
      {children}
    </TasksContext.Provider>
  )
}