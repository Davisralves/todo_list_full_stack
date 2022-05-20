import express from 'express';
import "dotenv/config";
import dbo from './database/connection';
import cors from "cors"
import { errorHandler } from "./controller/middlewares/errorHandler";
import createToDoList from './controller/createToDoList';

const app = express();
app.use(cors);
app.use(express.json());

const port = process.env.PORT || 5000;

app.post('/addNewList/:name', createToDoList);

app.use(errorHandler);

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err: Error) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});


