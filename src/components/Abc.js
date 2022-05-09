import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import { Box } from '@mui/system';



function Abc({ showperPage, onPaginationChange, total }) {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        const value = showperPage * counter;
        onPaginationChange(value - showperPage, value);
    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            }
            else {
                setCounter(counter - 1)
            }
        }
        else if (type === "next") {
            if (Math.ceil(total / showperPage) === counter) {
                setCounter(counter);
            }
            else {
                setCounter(counter + 1);

            }

        }

    };


    return (
        <>
            <Button onClick={() => onButtonClick("prev")} >Prev</Button>
            <Button onClick={() => onButtonClick("next")}>next</Button>
        </>


    )
}

export default Abc