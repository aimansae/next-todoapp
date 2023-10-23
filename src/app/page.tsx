"use client";

import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Styles from "./page.module.css";


export type TodoItem = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

let todoListFromLocalStorage:TodoItem[] = [];

type FormData = {
  description: string;
  title: string;
};

if (typeof window! =='undefined'){
todoListFromLocalStorage = JSON.parse(
  localStorage.getItem("todoList") || "[]",
);
}
export default function Home() {
  const [todoList, setTodoList] = useState(todoListFromLocalStorage);

  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);

  const handleSelect = (id: number) => {
    setTodoList(
      todoList.map((todo: { id: number; isDone: boolean }) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo: { id: number }) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const editedTodo = todoList.find((todo: { id: number }) => todo.id === id);
    if (editedTodo) {
      setEditingTodo(editedTodo);
    }
  };

  const handleUpdate = (updatedTodo: TodoItem) => {
    setTodoList((prevTodoList: any[]) =>
      prevTodoList.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
    setEditingTodo(null);
  };

  useEffect(() => {
    console.log(todoList, "Localcheck");
    // Log the updated todoList
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
      <header className={Styles.Heading}>
        <h1>My Tasks</h1>
      </header>
      <main className={Styles.Main}>
        <TodoForm onSubmit={handleSubmit} editingTodo={editingTodo} />
        <TodoList
          todoList={todoList}
          onSelect={handleSelect}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </main>
    </>
  );
}
