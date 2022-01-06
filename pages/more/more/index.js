import styles from './index.module.scss'
import classnames from 'classnames'
import Slide from '@mui/material/Slide';
import store from '../../../src/store';
import { CHANGE_INPUT } from '../../../src/store/actionTypes';
import React, { useState, useEffect } from 'react';
import { Input, Button } from '@mui/material';

export default function More() {
    const [state, setState] = useState({})

    useEffect(() => {
        storeChange = storeChange.bind(this)
        store.subscribe(storeChange)
        setState(store.getState())
    });

    const changeInputValue = e => {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }

    const storeChange = () => {
        setState(store.getState())
    }

    const clickBtn = () => {
        const action = { type: 'addItem' }
        store.dispatch(action)
    }

    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <div className={classnames(styles.more_wrap, styles.layout)}>
                <Input
                    placeholder={state.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={changeInputValue}
                />
                <Button type='primary' onClick={clickBtn}>Add</Button>
                <span>{state.inputValue}</span>
                
            </div>
        </Slide>
    )
}