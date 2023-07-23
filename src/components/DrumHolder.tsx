import { Dispatch, SetStateAction } from "react";
import drumSounds from "../assets/drum-sounds";
import DrumPad from "./DrumPad";

interface DrumHolderProps {

    setSoundLablel: Dispatch<SetStateAction<string>>;
}

const DrumHolder: React.FC<DrumHolderProps> = ({ setSoundLablel }: DrumHolderProps) => {


    return (

        <section className="grid grid-cols-3 gap-4 border-2 rounded-lg p-4 aspect-auto min-w-[300px] " >

            {
                drumSounds.map((sound) => {
                    return (
                        <DrumPad
                            sound={sound}
                            key={sound.keyTrigger}
                            id={sound.description}
                            setSoundLablel={setSoundLablel}
                        />
                    )
                })
            }

        </section>

    )
}

export default DrumHolder;