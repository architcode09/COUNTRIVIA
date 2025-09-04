import {createBrowserRouter , RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

import './App.css';
import { CountryDetails } from "./components/Layout/CountryDetails";



/* latest version of the react tells that we need to create the router */
const router = createBrowserRouter(
  [
  {
    path:"/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage/>,
    children: [
       {
  path:"/",
  element:<Home/>,

 } ,


 {
  path:"about",
  element:<About></About>
 },
  {
    path: "country",
    element: <Country />   // <-- 🔥 THIS FIXES YOUR ERROR
  },

 {
  path:"country/:id",// :/id = dynamic route
  element:<CountryDetails/>// render countrydetails
 },


 {
  path:"contact",
  element:<Contact></Contact>
 }
    ]
}

]
);
const App = () => {
  return <RouterProvider router={router}> </RouterProvider>
};

export default App;
