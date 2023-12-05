import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import React, { Fragment } from "react";
import * as Styled from "./TodoList.styled";
import { useTodoContext } from "../contexts/TodoContext";

// type Task = {
//   id: number;
//   title: string;
//   description: string;
//   isDone: boolean;
// };


const TodoList = () => {
  
  const {setTodoList, todoList, setEditingTodo} = useTodoContext()

  const onSelect = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

    const onDelete = (id: number) => {
    setTodoList(todoList.filter((todo: { id: number }) => todo.id !== id));
  };
  
  const onEdit = (id: number) => {
    const editedTodo = todoList.find((todo: { id: number }) => todo.id === id);
    if (editedTodo) {
      setEditingTodo(editedTodo);
    }
  };
  
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