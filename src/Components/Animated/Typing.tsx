import { useState, useEffect, type JSX } from 'react';

interface TypingProps {
    text: string;
    speed: number; 
    element?: keyof JSX.IntrinsicElements; 
    bold?: boolean;
    className?: string; 
}

export function Typing({ 
    text, 
    speed, 
    element = 'span', 
    bold = false, 
    className = '' 
}: TypingProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed]);

    useEffect(() => {
        setDisplayedText('');
        setCurrentIndex(0);
    }, [text, speed]);

    const Element = element as keyof JSX.IntrinsicElements;
    const style = bold ? { fontWeight: 'bold' } : {};

    return (
        <Element 
            style={style} 
            className={className}
        >
            {displayedText}
        </Element>
    );
}