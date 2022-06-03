import express, { json, NextFunction, Request, Response } from 'express';

const PORT = 5000;

interface MessageRequest extends Request {
  body: {
    message: string;
  };
}

const app = express();
app.use(json());

app.use((req, res, next) => {
  console.log(`request ${req.method} ${req.baseUrl} ${req.url} `);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.post('/', (req: MessageRequest, res) => {
  console.log(req.body);
  res.send(`<h1>I got ${req.body.message}</h1>`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  next();
});

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
