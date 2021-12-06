import styles from './index.module.scss'
import classnames from 'classnames'
import Slide from '@mui/material/Slide';
import Slider from '@mui/material/Slider';
import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import _ from 'lodash'

export default function Playlist() {
    var audioArray = []
    const [checked, setChecked] = useState(false);
    var [list, setList] = useState([
        {
            name: 'rain',
            music: '../../../assets/music/rain.mp3',
            active: false
        },
        {
            name: 'thunder',
            music: '../../../assets/music/thunder.mp3',
            active: false
        },
        {
            name: 'loudThunder',
            music: '../../../assets/music/loudThunder.mp3',
            active: false
        },
    ])

    useEffect(() => {
        setChecked(true);
    });

    const changeList = index => {
        let temp = _.cloneDeep(list)
        temp[index].active = !temp[index].active
        setList(temp)
    }

    return (
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit timeout={1500}>
            <div className={classnames(styles.list_wrap)}>
                <div className={classnames(styles.list_header)}>
                    <div className={classnames(styles.header_single)}>share</div>
                    <div className={classnames(styles.header_single)}>about</div>
                </div>
                <div className={classnames(styles.list_detail)}>
                    {list.map((i, index) => {
                        return (
                            <div key={index}>
                                <div className={classnames(styles.detail_title)}>{i.name}</div>
                                <div style={{ display: 'flex' }}>
                                    {
                                        (!list[index].active && <PlayArrowIcon
                                            onClick={() => {
                                                changeList(index)
                                                audioArray[index].play()
                                            }}
                                        />)
                                    }
                                    {
                                        (list[index].active && <PauseIcon
                                            onClick={() => {
                                                changeList(index)
                                                audioArray[index].pause()
                                            }}
                                        />)
                                    }
                                    <Slider
                                        defaultValue={1}
                                        max={1}
                                        min={0}
                                        step={0.1}
                                        onChange={e => audioArray[index].volume = e.target.value}
                                    style={{ width: '80%' }}
                                    />
                                </div>
                                <audio src={i.music} loop ref={node => audioArray[index] = node}>
                                </audio>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Slide>

    )
}