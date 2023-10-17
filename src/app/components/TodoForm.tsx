/* eslint-disable no-unused-vars */

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Styled from './TodoForm.styled';
import { TodoItem } from '../page';
import { AiFillPlusSquare } from 'react-icons/ai';

const schema = z.object({
  title: z.string().min(3, { message: 'Min 3 characters required' }),
  description: z.string().min(3, { message: 'Min 3 characters required' }),
});

export type InputFormData = z.infer<typeof schema>;

type Props = {
  onSubmit: (data: InputFormData) => void;
  editingTodo: TodoItem | null;
};

const TodoForm = ({ onSubmit, editingTodo }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <Styled.Form
        onSubmit={handleSubmit((data) => {
          onSubmit(data), reset();
        })}
      >
        <Styled.InputContainer>
          <label className="label">Task:</label>
          <input
            {...register('title')}
            name="title"
            type="text"
            placeholder="Enter task name..."
            defaultValue={editingTodo?.title || ''}
            className={editingTodo ? 'editActive' : 'normal'}
          />

          {errors.title && <p className="errors">{errors.title.message}</p>}

          <label className="label">Description:</label>
          <input
            {...register('description')}
            name="description"
            type="text"
            placeholder="Describe the task..."
            defaultValue={editingTodo?.description || ''}
            className={editingTodo ? 'editActive' : 'normal'}
          />
          {errors.description && (
            <p className="errors">{errors.description.message}</p>
          )}

          <Styled.ButtonDiv>
            <Styled.Button type="submit">
              <AiFillPlusSquare className="plusIcon" />
              {editingTodo ? 'Update' : 'Add'}
            </Styled.Button>
          </Styled.ButtonDiv>
        </Styled.InputContainer>
      </Styled.Form>
    </>
  );
};

export default TodoForm;
