import Clap from './Clap.mp3';
import Closed_HH from './Closed HH.mp3';
import Heater_1 from './Heater-1.mp3';
import Heater_2 from './Heater-2.mp3';
import Heater_3 from './Heater-3.mp3';
import Heater_4 from './Heater-4.mp3';
import Kick_n_Hat from './Kick_n_Hat.mp3';
import KICK from './KICK.mp3';
import Open_HH from './OPEN-HH.mp3';

const drumSounds = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        src: Heater_1,
        description: "Heater 1",
    },
    {
       keyCode: 87,
       keyTrigger: "W",
       src: Heater_2,
       description: "Heater 2", 
    },
    {
       keyCode: 69,
       keyTrigger: "E",
       src: Heater_3,
       description: "Heater 3",
    },
    {
       keyCode: 65,
       keyTrigger: "A",
       src: Heater_4,
       description: "Heater 4",
    },
    {
       keyCode: 83,
       keyTrigger: "S",
       src: Clap,
       description: "Clap",
    },
    {
      keyCode: 68,
       keyTrigger: "D",
       src: Open_HH,
       description: "Open HH",
    },
    {
       keyCode: 90,
       keyTrigger: "Z",
       src: Kick_n_Hat,
       description: "Kick n Hat",
    },
    {
       keyCode: 88,
       keyTrigger: "X",
       src: KICK,
       description: "Kick",
    },
    {
       keyCode: 67,
       keyTrigger: "C",
       src: Closed_HH,
       description: "Closed HH",
    }
];

export default drumSounds;