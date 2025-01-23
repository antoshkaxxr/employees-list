import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import {RootState} from "../../store/store";
import {useSelector} from "react-redux";
import './Layout.css';

export function Layout() {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    return (
        <div className={`layout${isDarkTheme ? '-dark' : ''}`}>
            <Header />
            <main className="main-content">
                <Outlet/>
            </main>
        </div>
    );
}
