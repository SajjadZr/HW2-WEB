import type { Shape, ShapeType } from "../configs";
import styles from './styles.module.css';

interface PropTypes {
    shape: Shape;
    remove: () => void;
}

const shapeMapping: Record<ShapeType, string> = {
    circle: '/public/circle.svg',
    square: '/public/square.svg',
    triangle: '/public/triangle.svg',
}

const BoardItem = (props: PropTypes) => {
    const { shape, remove } = props;

    return (
        <img src={shapeMapping[shape.type]} onClick={(e) => {
            if (e.detail === 2) {
                remove()
            }
        }} className={styles.img} style={{ top: shape.top, left: shape.left }} />
    )
}

export default BoardItem;