import './EmployeePage.css';
import { PagesPath } from "../../components/PagesPath/PagesPath";
import { Employee1 } from "../../mocks/EmployeeMocks";
import { Competence } from "../../components/UI-kit/Competence/Competence";

const formatPhoneNumber = (phone: string) => {
    return phone.replace(/[()]/g, '');
};

const formatDate = (dateString: string): string => {
    const months: { [key: string]: number } = {
        'января': 1,
        'февраля': 2,
        'марта': 3,
        'апреля': 4,
        'мая': 5,
        'июня': 6,
        'июля': 7,
        'августа': 8,
        'сентября': 9,
        'октября': 10,
        'ноября': 11,
        'декабря': 12
    };

    const parts = dateString.split(' ');
    if (parts.length !== 3) {
        return dateString;
    }

    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);

    const month = months[monthName];
    if (!month) {
        return dateString;
    }

    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    return `${formattedDay}.${formattedMonth}.${year}`;
};

export function EmployeePage() {
    return (
        <>
            <PagesPath employeeName={Employee1.name} />
            <div className={'employee-data'}>
                <img
                    className={'employee-photo'}
                    src={Employee1.photo}
                    alt={'Employee`s photo'}
                />
                <div className={'employee-info'}>
                    <div className={'employee-name'}>{Employee1.name}</div>
                    <div className={'employee-position'}>{Employee1.position}</div>
                    <div className={'employee-competencies'}>
                        {Employee1.stack.map((competence, index) => (
                            <Competence
                                key={`competence-${index}`}
                                competenceName={competence}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={'employee-main-info'}>
                <div className={'main-info-title'}>
                    Основная информация
                </div>
                <div className={'main-info-list'}>
                    <div className={'main-info-item'}>
                        <span className={'main-info-label'}>Контактный телефон:</span>
                        <span className={'main-info-value'}>{formatPhoneNumber(Employee1.phone)}</span>
                    </div>
                    <div className={'main-info-item'}>
                        <span className={'main-info-label'}>Дата рождения:</span>
                        <span className={'main-info-value'}>{formatDate(Employee1.birthdate)}</span>
                    </div>
                    <div className={'main-info-item'}>
                        <span className={'main-info-label'}>Дата устройства:</span>
                        <span className={'main-info-value'}>{formatDate(Employee1.dateOfEmployment)}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
