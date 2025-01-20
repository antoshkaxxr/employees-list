import './Competence.css';

type CompetenceProps = {
    competenceName: string;
}

export function Competence({competenceName}: CompetenceProps) {
    return (
        <span className={'competence'}>{competenceName}</span>
    );
}
