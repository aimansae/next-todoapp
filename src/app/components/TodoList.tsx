import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import React from "react";
import * as Styled from "./TodoList.styled";

type Task = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

type TodoListProps = {
  todoList: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onSelect: (id: number) => void;
};

const TodoList = ({ todoList, onDelete, onEdit, onSelect }: TodoListProps) => {
  if (todoList.length === 0) {
    return <Styled.Alert>No tasks yet. Add them now!</Styled.Alert>;
  }

  return (
    <Styled.ListContainer>
      <Styled.TaskContainer>
        {todoList.map((todo) => (
          <>
            {" "}
            <div className="header">
              <div key={todo.id} className="titleCheckbox">
                <input
                  className="customCheckbox"
                  type="checkbox"
                  value={todo.id}
                  checked={todo.isDone}
                  onChange={() => onSelect(todo.id)}
                />

                <div
                  className={`${
                    todo.isDone ? "textStriked" : "textNormal"
                  } titleContainer`}
                >
                  {todo.title}
                </div>
              </div>

              <div className="iconContainer">
                <BiEdit
                  className="editIconStyling"
                  onClick={() => onEdit(todo.id)}
                >
                  Edit
                </BiEdit>
                <AiOutlineDelete
                  className="deleteIconStyling"
                  onClick={() => onDelete(todo.id)}
                >
                  Delete
                </AiOutlineDelete>
              </div>
            </div>
            <div
              key={todo.id}
              className={`${
                todo.isDone ? "textStriked" : "textNormal"
              } descriptionContainer`}
            >
              {todo.description}
            </div>
          </>
        ))}
      </Styled.TaskContainer>
    </Styled.ListContainer>
  );
};

export default TodoList;
