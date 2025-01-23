import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { EmployeeInfo } from '../../types/EmployeeTypes';
import './EmployeeTable.css';
import { formatDate } from '../../utils/FormatFunctions';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type TableProps = {
    data: EmployeeInfo[];
};

export function EmployeeTable({ data }: TableProps) {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);
    const navigate = useNavigate();

    const handleRowClick = (employeeId: number) => {
        navigate(`${AppRoute.Employee}/${employeeId}`);
    };

    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table className={`table ${isDarkTheme ? 'table-dark' : ''}`}>
                    <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Должность</th>
                        <th>Телефон</th>
                        <th>Дата рождения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((employee, index) => (
                        <tr
                            key={`${employee.id}-${index}`}
                            onClick={() => handleRowClick(employee.id)}
                            className="clickable-row"
                        >
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.phone}</td>
                            <td>{formatDate(employee.birthdate)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
