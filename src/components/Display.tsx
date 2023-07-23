
interface DisplayProps {
    label: string;
}

const Display: React.FC<DisplayProps> = ({ label }) => {


    return (

        (<article id="display" className="flex flex-col justify-center items-center border rounded-lg border-white p-2 text-zinc-800 shadow-lg min-w-[10rem] h-auto" >
            <span className="font-normal text-md" >{label}</span>
        </article>)

    )
}

export default Display;