import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TodoLists from "../components/todoList/TodoLists";
import ViewTodo from "../components/todoList/ViewTodo";
import EditTask from "../components/todoList/EditTask";

export const router = createBrowserRouter([
  {
    path: "/react_proTodoListApp/",
    element: <App />,
    errorElement: <div>مشکل مشکل مشکل</div>,
    children: [
      {
        path: "/react_proTodoListApp/",
        element: <TodoLists />,
      },
      {
        path: "/react_proTodoListApp/viewTodo/:id",
        element: <ViewTodo />,
      },
      {
        path: "/react_proTodoListApp/editTodo/:id",
        element: <EditTask />,
      },
    ],
  },
]);
