import { useEffect, useState } from "react";

export type Typewriter = {
    typed: string[];
    finished: boolean;
    rush: () => {};
}

export const useTypewriter = ({ start = true, delay=500, phrases = [] as string[]}) => {

    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [finished, setFinished] = useState(false);

    const rush = () => {
        const phraseIndex = phrases?.length ?? 0;
        const characterIndex = phrases ? phrases[phraseIndex - 1].length : 0;

        setCurrentPhraseIndex(phraseIndex)
        setCurrentCharacterIndex(characterIndex)
        setFinished(true)
    }

    useEffect(() => {
        if (!start) {
            return;
        }

        if (currentPhraseIndex < phrases.length) {
            const phrase = phrases[currentPhraseIndex];

            if (currentCharacterIndex < phrase.length) {
                const timeout = setTimeout(() => {
                    setCurrentCharacterIndex(prevIndex => prevIndex + 1);
                }, 30);
                
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentCharacterIndex(0);
                    setCurrentPhraseIndex(prevIndex => prevIndex + 1);
                }, delay);

                return () => clearTimeout(timeout);
            }
        } else {
            setFinished(true);
        }
    }, [start, currentCharacterIndex, currentPhraseIndex, finished])

    const currentPhrase = currentPhraseIndex < phrases.length 
        ? phrases[currentPhraseIndex].slice(0, currentCharacterIndex) 
        : undefined;

    const typed = phrases.length > 0 
        ? currentPhrase
            ? phrases.slice(0, currentPhraseIndex).concat(currentPhrase)
            : phrases.slice(0, currentPhraseIndex) 
        : [];
    
    return {
        typed,
        finished,
        rush
    } as Typewriter;
}