import Table from 'react-bootstrap/Table';
import { BiEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import React, { ChangeEvent } from 'react';

type Task = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

type TodoListProps = {
  todoList: Task[];
  onDelete: (id: number) => void;
  onEdit: () => void;
  onSelect: (id: number) => void;
};

const TodoList = ({ todoList, onDelete, onEdit, onSelect }: TodoListProps) => {
  return (
    <Table striped hover className="m-3">
      <thead>
        <tr>
          <th></th>
          <th>Task Name</th>
          <th>Task Description</th>
          <th>Actions:</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <tr key={todo.id}>
            <td>
              <input
                type="checkbox"
                value={todo.id}
                checked={todo.isDone}
                onChange={() => onSelect(todo.id)}
              />
            </td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>
              <BiEdit onClick={() => onEdit}>Edit</BiEdit>
              <AiOutlineDelete onClick={() => onDelete(todo.id)}>
                Delete
              </AiOutlineDelete>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoList;
