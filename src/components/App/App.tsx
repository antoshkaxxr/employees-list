import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { AppRoute } from '../../const';
import { EmployeePage } from '../../pages/EmployeePage/EmployeePage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../Layout/Layout';
import {ThemeProvider} from "../ThemeProvider/ThemeProvider";
import {HelmetProvider} from "react-helmet-async";

export function App() {
  return (
      <>
          <HelmetProvider>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Layout />}>
                          <Route
                              path={AppRoute.Main}
                              element={<MainPage />}
                          />
                          <Route
                              path={`${AppRoute.Employee}/:id`}
                              element={<EmployeePage />}
                          />
                          <Route
                              path="*"
                              element={<NotFoundPage />}
                          />
                      </Route>
                  </Routes>
              </BrowserRouter>
              <ThemeProvider />
          </HelmetProvider>
      </>
  );
}
