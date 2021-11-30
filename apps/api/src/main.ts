import * as express from 'express';
import { Message } from '@advanced-monorepo/api-interfaces';
import { addTodoRoutes } from './app/todos';

const app = express();

const greeting: Message = { text: 'Welcome to api!', creationDate: '12.10.2021', userId: '1' };

app.get('/api', (req, res) => {
  res.send(greeting);
});
addTodoRoutes(app);

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
