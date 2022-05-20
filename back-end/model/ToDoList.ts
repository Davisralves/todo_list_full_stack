import dbo from "../database/connection";
import { IinsertOne } from "../interfaces/MongoDb";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ObjectId = require("mongodb").ObjectId;
const ToDoListModel = {

  createNewToDoList: async (name: string) => {
    const db_connect = dbo.getDb();
    const toDoList = {[name]: []};
    let response = {};
    await db_connect.collection("ToDoLists").insertOne(toDoList, (err: Error, res: IinsertOne) => {
      if(err) throw err;
      response = res;
    });
    return response;
  },

  updateList: async (id: string, array: string[]) => {
    const db_connect = dbo.getDb(); 
    const myquery = { _id: ObjectId( id )}; 
    const newvalues = { $set: {  Main: array } }
    let response = {};
    await db_connect.updateOne(myquery, newvalues, (err: Error, res: IinsertOne) => {
      if(err) throw err;
      response = res;
      console.log('model response', res);
    });
    return response;
  },

}
export default ToDoListModel;