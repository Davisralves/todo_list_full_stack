import dbo from "../database/connection";
import { IinsertOne } from "../interfaces/MongoDb";
const ToDoListModel = {

  createNewToDoList: async (name: string) => {
    const db_connect = dbo.getDb();
    const toDoList = {[name]: []};
    let response = {};
    await db_connect.collection("ToDoLists").insertOne(toDoList, (err: Error, res: IinsertOne) => {
      if(err) throw err;
      response = res;
      console.log('model response', res)
    });
    return response;
  }

}

export default ToDoListModel;