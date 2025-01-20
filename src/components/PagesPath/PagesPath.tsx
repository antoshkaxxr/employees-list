import './PagesPath.css';
import {ChevronRight} from "akar-icons";

type PagesPathProps = {
    employeeName?: string | undefined;
}

export function PagesPath({employeeName = undefined}: PagesPathProps) {
    return (
        <div className={'path-container'}>
            <span className={'path-part'}>Главная</span>
            <ChevronRight size={16} />
            <span className={'path-part'}>Список сотрудников</span>
            {employeeName &&
                <>
                    <ChevronRight size={16}/>
                    <span className={'path-part'}>{employeeName}</span>
                </>
            }
        </div>
    );
}
