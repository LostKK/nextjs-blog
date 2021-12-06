import styles from './index.module.scss'
import classnames from 'classnames'
import Slide from '@mui/material/Slide';
import React, { useState, useEffect } from 'react';

export default function Music() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    });

    return (
        <Slide direction="right" in={checked} mountOnEnter unmountOnExit timeout={1500}>
            <div className={classnames(styles.music_wrap)}>
                <div className={classnames(styles.title)}>
                    I Miss <br /> My Bar
                </div>
                <div>
                    <iframe frameBorder={"no"} border={"0"} marginWidth={"0"} marginHeight="0" width={330} height={86} src={"//music.163.com/outchain/player?type=2&id=1474959445&auto=1&height=66"}>
                    </iframe>
                </div>
            </div>
        </Slide>

    )
}