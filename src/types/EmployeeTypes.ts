type Gender = 'Женщина' | 'Мужчина';

type Position = 'Фронтендер' | 'Бэкендер' | 'Аналитик' | 'Менеджер' | 'Дизайнер';

type Stack = 'CSharp' | 'React' | 'Java' | 'PHP' | 'Figma' | 'Word';

export type EmployeeInfo = {
    id: number;
    name: string;
    photo: string;
    phone: string;
    gender: Gender;
    position: Position;
    stack: Stack[];
    birthdate: string;
    dateOfEmployment: string;
};
