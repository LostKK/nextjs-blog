import styles from './index.module.scss'
import classnames from 'classnames'
import Grow from '@mui/material/Grow';
import Slider from '@mui/material/Slider';
import React, { useState, useEffect, useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import _ from 'lodash'
import About from '../about/index'
import Link from 'next/link'

export default function Playlist() {
    var audioArray = []
    const aboutRef = useRef()
    const [checked, setChecked] = useState(false);
    var [list, setList] = useState([
        {
            name: '雨',
            music: '../../../assets/music/rain.mp3',
            active: false
        },
        {
            name: '雷',
            music: '../../../assets/music/thunder.mp3',
            active: false
        },
        {
            name: '更大的雷',
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

    const updateChildState = () => {
        aboutRef.current.updateState(true)
    }

    return (
        <Grow in={checked} timeout={1500}>
            <div>
                <div className={classnames(styles.list_wrap)}>
                    <div className={classnames(styles.list_header)}>
                        <div className={classnames(styles.header_single)} onClick={updateChildState}>关于</div>
                        <div className={classnames(styles.header_single)}>
                            <Link href={`/more`}>
                                <a>更多</a>
                            </Link>
                        </div>
                    </div>
                    <div className={classnames(styles.list_detail)}>
                        {list.map((i, index) => {
                            return (
                                <div key={index}>
                                    <div className={classnames(styles.detail_title)}
                                        onClick={() => {
                                            changeList(index)
                                            audioArray[index].play()
                                        }}
                                    >{i.name}</div>
                                    <div className={classnames(styles.detail_list)}>
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
                                            style={{ width: '85%', color: '#000' }}
                                        />
                                    </div>
                                    <audio src={i.music} loop ref={node => audioArray[index] = node}>
                                    </audio>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <About ref={aboutRef} />
            </div>
        </Grow>

    )
}