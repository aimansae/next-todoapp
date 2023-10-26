import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import React, { Fragment } from "react";
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
          <Fragment key={todo.id}>
            <Styled.Header>
              <Styled.TitleCheckbox key={todo.id}>
                <Styled.Input
                  type="checkbox"
                  value={todo.id}
                  checked={todo.isDone}
                  onChange={() => onSelect(todo.id)}
                />

                <Styled.Title className={todo.isDone ? "textStriked" : "textNormal"}>
                  {todo.title}
                </Styled.Title>
              </Styled.TitleCheckbox>

              <Styled.IconContainer>
                <BiEdit
                  className="editIconStyling"
                  onClick={() => onEdit(todo.id)}
                >
                </BiEdit>
                <AiOutlineDelete
                  className="deleteIconStyling"
                  onClick={() => onDelete(todo.id)}
                >
                </AiOutlineDelete>
              </Styled.IconContainer>
            </Styled.Header>
            <Styled.Description
              className={todo.isDone ? "textStriked" : "textNormal"}
            >
              {todo.description}
            </Styled.Description>
          </Fragment>
        ))}
      </Styled.TaskContainer>
    </Styled.ListContainer>
  );
};

export default TodoList;
