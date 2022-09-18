import { reactive } from "vue";
import { IntTodoList } from "../../type/todoList";

export default () => {
  type DataType = {
    list: IntTodoList[];
    toAddData: IntTodoList;
  };

  const data = reactive<DataType>({
    list: [],
    toAddData: {
      id: 0,
      title: "",
      isFinished: false,
    },
  });
  const onAdd = () => {
    data.list.push({ ...data.toAddData, id: data.list.length + 1 });
  };
  return { data, onAdd}
};
