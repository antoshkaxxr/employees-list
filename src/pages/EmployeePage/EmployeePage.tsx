import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './EmployeePage.css';
import { PagesPath } from '../../components/PagesPath/PagesPath';
import { Competences } from '../../components/UI-kit/Competences/Competences';
import { formatDate, formatPhoneNumber } from '../../utils/FormatFunctions';
import { fetchEmployeeDetails } from '../../store/employeeDetailsSlice';
import { RootState, AppDispatch } from '../../store/store';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export function EmployeePage() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { employee, loading, error } = useSelector((state: RootState) => state.employeeDetails);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (id) {
            dispatch(fetchEmployeeDetails(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (!employee) {
        return <div>Сотрудник не найден</div>;
    }

    return (
        <>
            <PagesPath employeeName={employee.name} />
            <div className="employee-data">
                <img
                    className="employee-photo"
                    src={employee.photo}
                    alt="Employee's photo"
                />
                <div className="employee-info">
                    <div className="employee-name">{employee.name}</div>
                    <div className="employee-position">{employee.position}</div>
                    {windowWidth > 768 && <Competences stack={employee.stack} />}
                </div>
            </div>
            {windowWidth <= 768 && <Competences stack={employee.stack} />}
            <hr className="divider" />
            <div className="employee-main-info">
                <div className="main-info-title">Основная информация</div>
                <div className="main-info-list">
                    <div className="main-info-item">
                        <span className="main-info-label">Контактный телефон:</span>
                        <span className="main-info-value">
                            {formatPhoneNumber(employee.phone)}
                        </span>
                    </div>
                    <div className="main-info-item">
                        <span className="main-info-label">Дата рождения:</span>
                        <span className="main-info-value">
                            {formatDate(employee.birthdate)}
                        </span>
                    </div>
                    <div className="main-info-item">
                        <span className="main-info-label">Дата устройства:</span>
                        <span className="main-info-value">
                            {formatDate(employee.dateOfEmployment)}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
