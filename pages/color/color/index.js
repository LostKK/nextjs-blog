import Zoom from '@mui/material/Zoom';
import React, { useState, useEffect } from 'react';
import data from '../data'
import Picker from '../picker/index'

export default function Color() {
    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState([]);

    useEffect(() => {
        setChecked(true);
        getData()
    });

    const getData = async () => {
        await setColor(data)
    }

    return (
        <Zoom in={checked} timeout={1500}>
            <div >
                123
            </div>
        </Zoom>
    )
}