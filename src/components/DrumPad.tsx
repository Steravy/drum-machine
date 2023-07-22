import { MouseEvent, useCallback } from "react";

interface DrumPadProps {
    id: string;
    keyTrigger: string;
    src: string;
    desription?: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ keyTrigger, src, id }: DrumPadProps) => {

    const handlePlay = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        const audio = new Audio(src);

        audio.play();
    }, [src]);

    return (

        <button onClick={handlePlay} id={id} className="drum-pad col-span-1 border border-white p-4 rounded-lg aspect-square shadow-lg text-zinc-800" >
            {keyTrigger}
        </button>
    )
}

export default DrumPad;