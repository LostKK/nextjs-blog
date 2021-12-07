import styles from './index.module.scss'
import classnames from 'classnames'
import Grow from '@mui/material/Grow';
import React, { useState, useEffect } from 'react';

export default function Music() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    });

    return (
        <Grow in={checked} timeout={1500}>
            <div className={classnames(styles.music_wrap)}>
                <div className={classnames(styles.title)}>
                    I Meet <br /> My Rain
                </div>
                <div className={classnames(styles.detail)}>
                    <p>妾弄青梅凭短墙</p>
                    <p>君骑白马傍垂杨</p>
                    <p>墙头马上遥相顾</p>
                    <p>一见知君即断肠</p>
                </div>
            </div>
        </Grow>

    )
}