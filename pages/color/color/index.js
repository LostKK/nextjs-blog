
import styles from './index.module.scss'
import classnames from 'classnames'
import Zoom from '@mui/material/Zoom';
import React, { useState, useEffect } from 'react';
import data from '../data'

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