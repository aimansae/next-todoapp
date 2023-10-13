/* eslint-disable no-unused-vars */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const schema = z.object({
  title: z.string().min(3, { message: 'Min 3 characters required' }),
  description: z.string().min(3, { message: 'Min 3 characters required' }),
});

type InputFormData = z.infer<typeof schema>;

type Props = {
  onSubmit: (data: InputFormData) => void;
};
const TodoForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFormData>({ resolver: zodResolver(schema) });
  return (
    <Form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
    >
      <Form.Group controlId="title">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          {...register('title')}
          name="title"
          type="text"
          placeholder="Enter a task..."
        />
      </Form.Group>
      {errors.title && <p className="text-danger">{errors.title.message}</p>}
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          {...register('description')}
          name="description"
          type="text"
          placeholder="Describe the task..."
        />
      </Form.Group>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
