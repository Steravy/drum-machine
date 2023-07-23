import { useState } from 'react';
import DrumHolder from './components/DrumHolder';
import Display from './components/Display';

function DrumMachine() {

  const [soundLablel, setSoundLablel] = useState<string>("");

  return (

    <section id="drum-machine" className='h-[100vh] p-4 flex flex-col justify-center items-center gap-6 bg-slate-200 ' >

      <Display label={soundLablel} />
      <DrumHolder setSoundLablel={setSoundLablel} />

    </section>
  )
}

export default DrumMachine;
