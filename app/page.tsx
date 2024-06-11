import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Theme from "./components/Theme";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-2">
      <div className="text-center my-5 flex flex-col gap-4 ">
        <h1 className="text-2xl font-bold">TODO LIST APP</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
      <Theme />
    </main>
  );
}
