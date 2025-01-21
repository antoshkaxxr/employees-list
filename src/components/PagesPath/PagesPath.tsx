import './PagesPath.css';
import { ChevronRight } from "akar-icons";

type PagesPathProps = {
    employeeName?: string | undefined;
}

export function PagesPath({ employeeName = undefined }: PagesPathProps) {
    return (
        <div className={'path-container'}>
            <span className={'path-part'}>Главная</span>
            <span><ChevronRight className={'chevron-right'} /></span>
            <span className={'path-part'}>Список сотрудников</span>
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
