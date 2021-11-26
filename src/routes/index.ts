import { Router, Request, Response } from 'express';

const routes = Router();

routes.use('/', (request: Request, response: Response) => {
  response.json('Welcome to ADOTE API');
});
