import styles from './index.module.scss'
import classnames from 'classnames'
import Slide from '@mui/material/Slide';

export default function More() {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <div className={classnames(styles.more_wrap, styles.layout)}>
            </div>
        </Slide>
    )
}