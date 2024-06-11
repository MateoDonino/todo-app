import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-2">
      <div className="text-center my-5 flex flex-col gap-4 ">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
      <Modal />
    </main>
  );
}
