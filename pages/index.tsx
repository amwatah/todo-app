import { Button, TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import TaskCard from "../components/TaskCard";
import { state } from "../store";

const Home = () => {
  const snap = useSnapshot(state);
  const [todoTitle, setTodoTitle] = useState<string>("");
  function addNewTask() {
    state.todos = [
      ...snap.todos,
      {
        title: todoTitle,
        done: false,
        created: new Date(),
      },
    ];
    showNotification({
      title: "ADDED",
      message: todoTitle,
      autoClose: 2000,
    });
    setTodoTitle("");
  }
  return (
    <div className=" w-screen h-screen flex flex-col  items-center p-2 gap-4">
      <section className="new  flex flex-col gap-1">
        <TextInput
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          label="Task title"
        />
        <Button onClick={addNewTask}>ADD NEW TASK</Button>
      </section>
      {state.todos.length > 0 && (
        <>
          {snap.todos.map((task) => (
            <>
              <TaskCard task={task} />
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
