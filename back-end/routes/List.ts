import express from 'express';
import createToDoList from '../controller/createToDoList';
const ListRouter = express.Router();
 
ListRouter.route('/addList/:name').post(createToDoList);


 export default ListRouter;