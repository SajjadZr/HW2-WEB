import type { Dispatch, SetStateAction } from 'react';
import type { Shape, ShapeType } from '../configs';
import styles from './styles.module.css';
import BoardItem from '../BoardItem';

interface PropTypes {
    selectedPainting: ShapeType | null;
    setSelectedPainting: Dispatch<SetStateAction<ShapeType | null>>;
    shapes: Shape[];
    addShape: (shape: Shape) => void;
    removeShape: (shapeIndex: number) => void;
}

const Board = (props: PropTypes) => {

    const {
        shapes,
        addShape,
        selectedPainting,
        setSelectedPainting,
        removeShape
    } = props;

    return (
        <div onClick={(e) => {
            if (selectedPainting !== null) {
                const boundingRectOfElm = e.currentTarget.getBoundingClientRect();
                addShape({
                    top: ((e.clientY - boundingRectOfElm.top)),
                    left: ((e.clientX - boundingRectOfElm.left)),
                    type: selectedPainting
                });
                setSelectedPainting(null)
            }
        }} className={styles.container}>
            {
                shapes.map((shapeItem, index) => {
                    return <BoardItem
                        key={`${shapeItem.top}-${shapeItem.left}-${shapeItem.type}`}
                        shape={shapeItem}
                        remove={() => removeShape(index)}
                    />
                })
            }
        </div>
    )
}

export default Board;