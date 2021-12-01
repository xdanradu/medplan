import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Message } from '@advanced-monorepo/api-interfaces';
import { addTodoRoutes } from './app/todosRoutes';
import { addAuthRoutes } from './app/authRoutes';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const greeting: Message = {
  text: 'Welcome to api!',
  creationDate: '12.10.2021',
  userId: '1',
};

app.get('/api', (req, res) => {
  res.send(greeting);
});
addAuthRoutes(app);
addTodoRoutes(app);

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
