import { useEffect } from 'react'
import molehill from './assets/molehill.png'

// added useEffect and tried using setDisplayMole as my parameter instead of props.
function EmptySlot({ setDisplayMole }) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, [setDisplayMole])

    return (
            <img src={ molehill } alt="Molehill" />
    )
}

export default EmptySlot;