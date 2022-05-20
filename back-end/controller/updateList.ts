import { generateError } from "./middlewares/errorHandler";
import { Request, Response, NextFunction } from "express";
import ToDoListService from "../service/ToDoList";
const updateList = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
  try {
    const { id, list } = req.body;
    const response = await ToDoListService.updateList(id, list);
    if(!response) throw generateError('Server error, can not create a new list', 500);
    res.status(200).json({});
   } catch (error) {
    next(error)
  }
};

export default updateList;
