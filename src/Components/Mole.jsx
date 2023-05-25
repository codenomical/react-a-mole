import { useEffect } from 'react'
import mole from './assets/mole.png'

// using props to handle the onClick. Restyled the mole img by resizing it and placing it into a 3 column grid.
function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
        <img className="small mole"
        src={mole} 
        onClick={props.handleClick} />
        </div>
    )
}

export default Mole;