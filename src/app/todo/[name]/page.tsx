import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import CardTask from "@/components/CardTask";

export default function Todo({ params }: { 
  params: { name: string }
}) {
  return (
    <>
      <Header name={params.name} />
      <Main>
        <CardTask />
      </Main>
    </>
  )
}
