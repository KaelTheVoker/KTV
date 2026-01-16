import { useState, useEffect } from 'react';

const useGetLang = () => {
    const [lang, setLang] = useState<'ru' | 'en'>('en');

    useEffect(() => {
        const browserLang = navigator.language;

        const nextLang: 'ru' | 'en' =
            browserLang.startsWith('ru') ? 'ru' : 'en';

        setLang(nextLang);

        document.documentElement.lang = nextLang;
    }, []);

    return lang;
};

export default useGetLang;
