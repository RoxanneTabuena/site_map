import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { Index } from './components/index/Index';
import { Map } from './components/map/Map';

import './App.css';


const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route 
          path="map/:component" 
          element={ <Map/>}/>
        <Route 
          path="index" 
          element={<Index/> }/>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
