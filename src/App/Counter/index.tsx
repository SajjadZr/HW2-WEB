import type { Shape, ShapeType } from '../configs';
import styles from './styles.module.css';

interface PropTypes {
    shapes: Shape[]
}

const Counter = (props: PropTypes) => {
    const { shapes } = props;

    const countResult: Record<ShapeType, number> = {
        circle: 0,
        square: 0,
        triangle: 0
    }

    for (let i = 0; i < shapes.length; i++) {
        countResult[shapes[i].type]++;
    }

    return (
        <div className={styles.container}>

            <div className={styles.itemContainer}>
                <img src='/public/circle.svg' />
                <span>{countResult.circle}</span>
            </div>

            <div className={styles.itemContainer}>
                <img src='/public/square.svg' />
                <span>{countResult.square}</span>
            </div>

            <div className={styles.itemContainer}>
                <img src='/public/triangle.svg' />
                <span>{countResult.triangle}</span>
            </div>
        </div>
    )
}

export default Counter;