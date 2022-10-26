import { ActionIcon, Switch } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React from "react";
import { MdOutlineDone, MdOutlineRemoveDone, MdDelete } from "react-icons/md";
import { state } from "../store";
interface Props {
  task: {
    title: string;
    done: boolean;
    created: Date;
  };
}
const TaskCard = ({ task }: Props) => {
  return (
    <div className="flex justify-between items-center container w-[70vw] border-2  border-mantinePrimary shadow-lg rounded-md p-2 animate-slideInDown ">
      <p className=" flex-[3] uppercase font-bold flex flex-col ">
        <span>{task.title}</span>
        <span>{task.created.toLocaleString()}</span>
      </p>
      <Switch
        className="flex-[1]"
        onLabel={<MdOutlineRemoveDone className=" font-bold text-lg" />}
        offLabel={<MdOutlineDone className=" font-bold text-lg" />}
        onChange={() => {
          state.todos[
            state.todos.findIndex((el) => el.title === task.title)
          ].done =
            !state.todos[state.todos.findIndex((el) => el.title === task.title)]
              .done;
          showNotification({
            message: `${
              state.todos[
                state.todos.findIndex((el) => el.title === task.title)
              ].done
                ? `COMPLETED : ${task.title}`
                : `PENDING TASK : ${task.title}`
            }`,
          });
        }}
      />
      <ActionIcon
        onClick={() => {
          state.todos = state.todos.filter((el) => !(el.title === task.title));
        }}
      >
        <MdDelete className=" text-2xl text-red-700 flex-[1]" />
      </ActionIcon>
    </div>
  );
};

export default TaskCard;
