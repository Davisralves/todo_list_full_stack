import ToDoListModel from "../model/ToDoList";
const ToDoListService = {

  createNewToDoList: async (name: string) => {
    return ToDoListModel.createNewToDoList(name);
  },
  updateList: async (id: string, array: string[]) => {
    return ToDoListModel.updateList(id, array)
  }
}

export default ToDoListService;