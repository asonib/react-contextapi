import React, { useContext } from 'react'
import colorContext from './GlobalState';


const Hello = () => {
    const color = useContext(colorContext);
    return (
        <div>
            {color.name}
        </div>
    )
}

export default Hello
