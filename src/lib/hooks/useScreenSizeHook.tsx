import { useState, useEffect, useLayoutEffect } from 'react';

const useScreenSizeHook = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {
        if (!window) return;

        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])

    useEffect(() => {
        if (!window) return

        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};

export default useScreenSizeHook;