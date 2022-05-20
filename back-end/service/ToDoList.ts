import ToDoListModel from "../model/ToDoList";
const ToDoListService = {

  createNewToDoList: async (name: string) => {
    return ToDoListModel.createNewToDoList(name);
  }

}

export default ToDoListService;