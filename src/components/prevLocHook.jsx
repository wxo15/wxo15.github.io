import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function prevLocHook() {
    const location = useLocation();
    const prevRef = useRef(null);

    useEffect(() => {
        prevRef.current = location.pathname;
    }, [location]);

    return prevRef.current;
}
