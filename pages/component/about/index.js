import styles from './index.module.scss'
import classnames from 'classnames'
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Zoom from '@mui/material/Zoom';
import CloseIcon from '@mui/icons-material/Close';

let About = (props, ref) => {
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);

    useImperativeHandle(ref, () => ({
        updateState: (newVal) => {
            setShow(newVal)
        }
    }));

    useEffect(() => {
        setChecked(true);
        if (show) {
            var move = e => { e.preventDefault(); }
            document.body.style.overflow = 'hidden';
            document.addEventListener("touchmove", move, false);
        } else {
            var move = e => { e.preventDefault(); }
            document.body.style.overflow = '';
            document.removeEventListener("touchmove", move, false);
        }
    });

    return (
        show &&
        <div className={classnames(styles.about_container)}>
            <div className={classnames(styles.about_wrap)}>
                <Zoom in={checked}>
                    <div className={classnames(styles.about_circle)}>
                        <div className={classnames(styles.about_content)}>
                            <div className={classnames(styles.content_title)}>
                                <p>We all missing the rain</p>
                            </div>
                            <div className={classnames(styles.content_detail)}>
                                <p>前端 react.js 17</p>
                                <p>开发框架 next.js 12</p>
                                <p>组件库 meterial ui</p>
                                <p>emmmmmm....</p>
                                <p>that's all</p>
                            </div>
                        </div>
                        <CloseIcon
                            sx={{ color: '#fff', fontSize: 40 }}
                            onClick={() => { setShow(false) }} />
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

About = forwardRef(About)
export default About