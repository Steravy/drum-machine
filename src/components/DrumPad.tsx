import { Dispatch, MouseEvent, SetStateAction, useCallback, useRef } from "react";

interface DrumPadProps {
    id: string;
    keyTrigger: string;
    src: string;
    desription: string;
    setSoundLablel: Dispatch<SetStateAction<string>>
}

const DrumPad: React.FC<DrumPadProps> = ({ keyTrigger, src, id, setSoundLablel, desription }: DrumPadProps) => {

    const audioRef = useRef();

    const handleClickToPlay = useCallback((e: MouseEvent<HTMLButtonElement>) => {

        e.stopPropagation();

        setSoundLablel(desription);

        new Audio(src)
            .play()

    }, [src]);

    return (

        <button onClick={handleClickToPlay} id={id} className="drum-pad col-span-1 border border-white p-4 rounded-lg aspect-square shadow-lg text-zinc-800" >
            {/* not really necessary at all for my use case, just put it here as fcc requiremnt, but maybe you could build yours using it */}
            <audio src={src} className="clip" id={keyTrigger} />
            {keyTrigger}
        </button>
    )
}

export default DrumPad;

// KeyboardEventHandler<HTMLButtonElement>