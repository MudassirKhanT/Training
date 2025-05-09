import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";
import { ToastContainer } from "react-toastify";
import Profile from "./Profile.jsx";
import Seven from "./Seven.jsx";
import Snake from "./Snake/Snake.jsx";
import User from "./User.jsx";
import CreateUser from "./CreateUser.jsx";
import UpdateUser from "./UpdateUser.jsx";
import TodoList from "./TodoList.jsx";
// import { auth } from "./Firebase.jsx";

// const [user, setUser] = useState(null);
// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     setUser(user);
//   });
// });

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/seven",
    element: <Seven />,
  },
  {
    path: "/snake",
    element: <Snake />,
  },
  {
    path: "/users",
    element: <User />,
  },
  {
    path: "/create",
    element: <CreateUser />,
  },
  {
    path: "/update",
    element: <UpdateUser />,
  },
  {
    path: "/todo",
    element: <TodoList />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
    <ToastContainer />
  </StrictMode>
);
