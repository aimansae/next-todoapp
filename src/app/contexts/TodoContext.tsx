import React, { createContext, ReactNode, useContext, useState } from "react";
import { TodoItem } from "../page";
import { useLocalStorage } from "../hooks/useLocalStorage";

type TodoContextProps = {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  editingTodo: TodoItem | null;
  setEditingTodo: React.Dispatch<React.SetStateAction<TodoItem | null>>;
};

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
);

const TodoContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [todoList, setTodoList] = useLocalStorage<TodoItem[]>("todoList", []);
  const [editingTodo, setEditingTodo] = useState<TodoItem | null>(null);

  const contextValue: TodoContextProps = {
    todoList,
    setTodoList,
    editingTodo,
    setEditingTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;

// custom hook
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("use useContext inside TodoContextProvider");
  }
  return context;
};
