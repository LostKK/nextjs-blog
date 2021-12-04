import styles from './index.module.scss'
import classnames from 'classnames'
import Zoom from '@mui/material/Zoom';
import React, { useState, useEffect } from 'react';


export default function Music() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    });

    return (
        <Zoom in={checked} timeout={1500}>
            <div className={classnames(styles.main_wrap)}>
                main
            </div>
        </Zoom>
    )
}