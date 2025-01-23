export function mapFunction(name: string): string {
    switch (name) {
        case 'Male':
            return 'мужчина';
        case 'Female':
            return 'женщина';

        case 'Frontend':
            return 'фронтенд-разработчик';
        case 'Backend':
            return 'бэкенд-разработчик';
        case 'Analyst':
            return 'аналитик';
        case 'Manager':
            return 'менеджер';
        case 'Designer':
            return 'дизайнер';

        case 'React':
            return 'react';
        case 'CSharp':
            return 'c#';
        case 'Java':
            return 'java';
        case 'PHP':
            return 'php';
        case 'Figma':
            return 'figma';
        case 'Word':
            return 'word';

        default:
            return name;
    }
}
