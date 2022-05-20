import { generateError } from "./middlewares/errorHandler";
import { Request, Response, NextFunction } from "express";
import ToDoListService from "../service/ToDoList";
const createToDoList = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
  try {
    const { name } = req.params;
    console.log('foi');
    const response = await ToDoListService.createNewToDoList(name);
    console.log(response);
    if(!response) generateError('Server error, can not create a new list', 500);
    res.status(201).json(response.insertId);
   } catch (error) {
    next(error)
  }
};

export default createToDoList;
