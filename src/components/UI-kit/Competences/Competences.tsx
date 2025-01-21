import './Competences.css';
import {Stack} from "../../../types/EmployeeTypes";

type CompetencesProps = {
    stack: Stack[];
}

export function Competences({stack}: CompetencesProps) {
    return (
        <div className={'employee-competencies'}>
            {stack.map((competence, index) => (
                <span
                    key={`competence-${index}`}
                    className={'competence'}
                >
                    {competence}
                </span>
            ))}
        </div>

    );
}
