import './Header.css';
import { Switch } from '../UI-kit/Switch/Switch';

export function Header() {
    return (
        <div className={'header'}>
            <img
                className={'header-logo'}
                src={'/assets/logo.svg'}
                alt={'Логотип 66 Бит'}
            />
            <div className={'header-right'}>
                <div className={'header-contacts'}>
                    <span>+7 343 290 84 76</span>
                    <span>info@66bit.ru</span>
                </div>
                <Switch />
            </div>
        </div>
    );
}
