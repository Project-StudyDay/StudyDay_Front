import logo from './logo.png';
import './app.css';
import './assets/styles/base/reset.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dday from './pages/Dday';
import Timetable from './pages/Timetable';
import Todolist from './pages/Todolist';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <p>그런 경로 없습니다</p>,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: 'd-day',
        element: <Dday />
      },
      {
        path: 'timetable',
        element: <Timetable />
      },
      {
        path: 'todo-list',
        element: <Todolist />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
