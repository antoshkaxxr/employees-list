export type Gender = 'Женщина' | 'Мужчина';

export type Position = 'Фронтендер' | 'Бэкендер' | 'Аналитик' | 'Менеджер' | 'Дизайнер';

export type Stack = 'CSharp' | 'React' | 'Java' | 'PHP' | 'Figma' | 'Word';

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
