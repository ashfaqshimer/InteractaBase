import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/register" element={<RegistrationPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
