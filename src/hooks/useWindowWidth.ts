import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = throttle(() => {
            setWindowWidth(window.innerWidth);
        }, 200);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth;
}
