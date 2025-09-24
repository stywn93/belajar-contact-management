import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.jsx";
import UserRegister from "./components/User/UserRegister.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path={"/register"} element={<UserRegister/>}/>
              </Route>
              <Route path={"/dashboard"}></Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
