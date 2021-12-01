import { Express } from 'express';
import { Todo } from '@advanced-monorepo/api-interfaces';

const todosRoutes: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => {
    resp.send(todosRoutes);
  });
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    };
    todosRoutes.push(newTodo);
    resp.send(newTodo);
  });
}
