import { useEffect, useState } from "react";

export type Typewriter = {
    typed: string[];
    finished: boolean;
}

export const useTypewriter = ({ start = true, phrases = [] as string[] }) => {

    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [finished, setFinished] = useState(false);

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
                }, 500);

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
        finished
    } as Typewriter;
}