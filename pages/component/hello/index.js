import styles from './index.module.scss'
import classnames from 'classnames'
import Music from '../music/index'
import Playlist from '../playlist/index'
import Main from '../mainPicture/index'

export default function Hello() {
    return (
        <div className={classnames(styles.wrap, styles.layout)}>
            <div className={classnames(styles.leftWidth, styles.single)}>
                <Music />
            </div>
            <div className={classnames(styles.centerWidth, styles.single)}>
                <Main />
            </div>
            <div className={classnames(styles.rightWidth, styles.single)}>
                <Playlist />
            </div>
        </div>
    )
}