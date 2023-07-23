import { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useRef } from "react";
import { AudioClip } from "../type";

interface DrumPadProps {
    id: string;
    sound: AudioClip
    setSoundLablel: Dispatch<SetStateAction<string>>
}

const DrumPad: React.FC<DrumPadProps> = ({ id, sound, setSoundLablel }: DrumPadProps) => {

    const { keyTrigger, src, description } = sound;
    const audioRef = useRef<HTMLAudioElement>(null);


    const handleClickToPlay = useCallback((e: MouseEvent<HTMLButtonElement>) => {

        e.stopPropagation();

        if (audioRef.current) {
            audioRef.current.play();
        }

        setSoundLablel(description);

    }, [src, description, setSoundLablel]);


    useEffect(() => {

        const handleKeyPress = (e: KeyboardEvent) => {


            if (e.key === sound.keyTrigger.toLowerCase() && audioRef.current) {
                audioRef.current.play();
                setSoundLablel(sound.description);

            }
        }

        document.addEventListener('keydown', (e) => {
            e.stopPropagation();
            handleKeyPress(e);
        });

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };

    }, [keyTrigger, src, setSoundLablel]);


    return (

        <button onClick={handleClickToPlay} id={id} className="drum-pad col-span-1 border border-white p-4 rounded-lg aspect-square shadow-lg text-zinc-800" >

            <audio ref={audioRef} src={src} className="clip" id={keyTrigger} />
            {keyTrigger}

        </button>
    )
}

export default DrumPad;

// 