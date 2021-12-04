import Button from '@material-ui/core/Button';
import styles from './index.module.css'

export default function About() {
    const onClick = () => {
        Toast.show('点击了卡片')
    }

    return (
        <div>
            <Button variant="contained" className={styles.error}>not bad</Button>
        </div>
    )
}