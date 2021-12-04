import styles from './index.module.scss'
import classnames from 'classnames'
import Slide from '@mui/material/Slide';
import React, { useState, useEffect } from 'react';

export default function Playlist() {
    const [checked, setChecked] = useState(false);

    const list = [
        {
            name:'rain',
            music: '../../../public/assets/music/rain.mp3'
        }
    ]

    useEffect(() => {
        setChecked(true);
    });

    return (
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit timeout={1500}>
           <div className={classnames(styles.list_wrap)}>
               <div className={classnames(styles.list_header)}>
                    <div className={classnames(styles.header_single)}>share</div>
                    <div className={classnames(styles.header_single)}>about</div>
               </div>
              <div>
                 {list.map((i,index) =>{
                     return (
                         <div key={index}>
                             {i.name}
                            <audio loop={"loop"} preload={"auto"} src={i.music} controls={true}>
                            </audio>
                        </div>
                     )
                 })}
              </div>
            </div>
        </Slide>
        
    )
}