'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import TodoList from './components/TodoList';
import styles from './page.module.css';

export default function Home() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'grocery',
      description: 'buy apples and melons',
      isDone: false,
    },
    {
      id: 2,
      title: 'grocery',
      description: 'buy apples and melons',
      isDone: false,
    },
    {
      id: 3,
      title: 'grocery',
      description: 'buy apples and melons',
      isDone: false,
    },
  ]);
  const handleSelect = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todoList); // Log the updated todoList
  }, [todoList]);

  return (
    <main className={styles.main}>
      <TodoList
        todoList={todoList}
        onSelect={handleSelect}
        onDelete={handleDelete}
        onEdit={() => console.log('Edit CLicked')}
      />
    </main>
  );
}
