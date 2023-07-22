import drumSounds from "../assets/drum-sounds";
import DrumPad from "./DrumPad";

const DrumHolder = () => {



    return (

        <section id="display" className="grid grid-cols-3 gap-4 border-2 border-zinc-100 rounded-lg p-4 aspect-auto min-w-[300px]" >
            {
                drumSounds.map((sound) => {
                    return (
                        <DrumPad key={sound.keyTrigger} id={sound.description} src={sound.src} keyTrigger={sound.keyTrigger} />
                    )
                })
            }
        </section>
    )
}

export default DrumHolder;