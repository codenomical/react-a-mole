import Mole from './Mole'
import EmptySlot from './EmptySlot';
import { useState } from 'react'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    let handleBop = e => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    // setup how the mole will display and run the empty slot as well.
    let isMoleUp = displayMole 
    ? <Mole handleClick={handleBop} setDisplayMole={setDisplayMole} /> 
    : <EmptySlot setDisplayMole={setDisplayMole} />;

    return (
        <div>
            {isMoleUp}
        </div>
    )
}

export default MoleContainer;