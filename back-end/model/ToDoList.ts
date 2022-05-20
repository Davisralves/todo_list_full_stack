import dbo from "../database/connection";
import { IinsertOne } from "../interfaces/MongoDb";
const ToDoListModel = {

  createNewToDoList: async (name: string) => {
    const db_connect = dbo.getDb();
    const toDoList = {[name]: []};
    return db_connect.collection("ToDoLists").insertOne(toDoList, (err: Error, res: IinsertOne) => {
      console.log(res);
      if(err) throw err;
      return res.acknowledged;
    })
  }

}

export default ToDoListModel;