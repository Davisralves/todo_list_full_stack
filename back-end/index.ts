import express from 'express';
import "dotenv/config";
import dbo from './database/connection';
import cors from "cors"
import { errorHandler } from "./controller/middlewares/errorHandler";
import createToDoList from './controller/createToDoList';
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.post('/addList', createToDoList );

app.use(errorHandler);

app.listen(port, () => {
  dbo.connectToServer(function (err: Error) {
    if (err) console.error(err);
  });
  console.log(`Server is running on porta: ${port}`);
});


