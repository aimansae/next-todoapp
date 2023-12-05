"use client";

import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import * as Styled from "./page.styled";
import TodoContextProvider, { useTodoContext } from "./contexts/TodoContext";

export type TodoItem = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

type FormData = {
  description: string;
  title: string;
};

export default function Home() {
  // const [todoList, setTodoList] = useLocalStorage<TodoItem[]>("todoList", [])
  // const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);
  const { editingTodo, setTodoList, todoList, setEditingTodo } =
    useTodoContext();

  // const handleSelect = (id: number) => {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
  //     ),
  //   );
  // };

  // const handleDelete = (id: number) => {
  //   setTodoList(todoList.filter((todo: { id: number }) => todo.id !== id));
  // };

  // const handleEdit = (id: number) => {
  //   const editedTodo = todoList.find((todo: { id: number }) => todo.id === id);
  //   if (editedTodo) {
  //     setEditingTodo(editedTodo);
  //   }
  // };

  const handleUpdate = (updatedTodo: TodoItem) => {
    const updatedList = todoList.map((todo) =>
      todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo,
    );
    setTodoList(updatedList);
    setEditingTodo(null);
  };

  const handleSubmit = (data: FormData) => {
    if (editingTodo) {
      // Update an existing item
      handleUpdate({ ...editingTodo, ...data });
    } else {
      // Add a new item
      setTodoList([
        ...todoList,
        { ...data, id: todoList.length + 1, isDone: false },
      ]);
    }
    setEditingTodo(null);
  };
  return (
    <>
      <Styled.Header>
        <h1>My Tasks</h1>
      </Styled.Header>
      <Styled.Main>
        <TodoContextProvider>
          <TodoForm onSubmit={handleSubmit} editingTodo={editingTodo} />
          <TodoList />
        </TodoContextProvider>
      </Styled.Main>
    </>
  );
}
