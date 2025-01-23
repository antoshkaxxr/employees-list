import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function ThemeProvider() {
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.style.backgroundColor = '#292929';
            document.body.style.color = '#F5F5F5';
        } else {
            document.body.style.backgroundColor = '#FFFFFF';
            document.body.style.color = '#292929';
        }
    }, [isDarkTheme]);

    return null;
}
