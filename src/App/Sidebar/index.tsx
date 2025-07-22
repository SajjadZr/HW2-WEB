import type { Dispatch, SetStateAction } from 'react';
import type { ShapeType } from '../configs';
import styles from './styles.module.css';

interface PropTypes {
    selectedPainting: ShapeType | null;
    setSelectedPainting: Dispatch<SetStateAction<ShapeType | null>>;
}

const Sidebar = (props: PropTypes) => {
    const { selectedPainting, setSelectedPainting } = props;

    const onImageClickHandler = (shapeType: ShapeType) => {
        if (selectedPainting === null) {
            setSelectedPainting(shapeType);
        } else if (selectedPainting === shapeType) {
            setSelectedPainting(null);
        } else {
            setSelectedPainting(shapeType);
        }
    }

    return (
        <div className={styles.container}>
            <img
                onClick={() => onImageClickHandler('circle')}
                className={`${styles.img} ${selectedPainting === 'circle' ? styles.active : ''}`}
                src='/public/circle.svg'
            />
            <img
                onClick={() => onImageClickHandler('square')}
                className={`${styles.img} ${selectedPainting === 'square' ? styles.active : ''}`}
                src='/public/square.svg'
            />
            <img
                onClick={() => onImageClickHandler('triangle')}
                className={`${styles.img} ${selectedPainting === 'triangle' ? styles.active : ''}`}
                src='/public/triangle.svg'
            />
        </div>
    )
}

export default Sidebar;