import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "../../pages/MainPage/MainPage.tsx";
import {AppRoute} from "../../const.ts";
import {EmployeePage} from "../../pages/EmployeePage/EmployeePage.tsx";
import {NotFoundPage} from "../../pages/NotFoundPage/NotFoundPage.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Employee}
          element={<EmployeePage />}
        />
        <Route
          path={'*'}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
