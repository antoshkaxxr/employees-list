import './Competences.css';
import {Stack} from "../../../types/EmployeeTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

type CompetencesProps = {
    stack: Stack[];
}

export function Competences({stack}: CompetencesProps) {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    return (
        <div className={'employee-competencies'}>
            {stack.map((competence, index) => (
                <span
                    key={`competence-${index}`}
                    className={`competence-base ${isDarkTheme ? 'competence-dark' : 'competence'}`}
                >
                    {competence}
                </span>
            ))}
        </div>

    );
}
