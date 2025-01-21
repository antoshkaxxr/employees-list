import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export function Layout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    );
}
