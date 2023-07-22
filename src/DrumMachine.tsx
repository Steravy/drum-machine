import { useState } from 'react';
import './App.css';
import DrumHolder from './components/DrumHolder';

function DrumMachine() {
  const [count, setCount] = useState(0)

  return (

    <section id="drum-machine" className='h-[100vh] p-4 flex flex-col justify-center items-center bg-slate-100' >
        <DrumHolder />
    </section>
  )
}

export default DrumMachine
