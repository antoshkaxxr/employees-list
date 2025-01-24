import './PagesPath.css';
import { ChevronRight } from "akar-icons";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {useWindowWidth} from "../../hooks/useWindowWidth";

type PagesPathProps = {
    employeeName?: string | undefined;
}

export function PagesPath({ employeeName = undefined }: PagesPathProps) {
    const windowWidth = useWindowWidth();

    return (
        <div className={'path-container'}>
            {(windowWidth > 768 || location.pathname === AppRoute.Main) &&
                <>
                    <span className={'path-part'}>Главная</span>
                    <span><ChevronRight className={'chevron-right'} /></span>
                </>
            }
            <Link to={AppRoute.Main} style={{ textDecoration: 'none' }}>
                <span className={'path-part'}>Список сотрудников</span>
            </Link>
            {employeeName &&
                <>
                <span><ChevronRight className={'chevron-right'} /></span>
                    <span className={'path-part path-employee-name'}>
                        {employeeName}
                    </span>
                </>
            }
        </div>
    );
}
