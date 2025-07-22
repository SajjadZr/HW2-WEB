import { useState } from 'react'
import styles from './styles.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Board from './Board';
import Counter from './Counter';
import type { Shape, ShapeType } from './configs';

function App() {

  const [shapes, setShapes] = useState<Shape[]>([]);

  const [title, setTitle] = useState("Painting");

  const [selectedPainting, setSelectedPainting] = useState<ShapeType | null>(null)

  const addShape = (shape: Shape) => {
    const newShapes = [...shapes];
    newShapes.push(shape);
    setShapes(newShapes);
  };

  const removeShape = (shapeIndex: number) => {
    const newShapes = [...shapes];
    newShapes.splice(shapeIndex, 1);
    setShapes(newShapes);
  }

  return (
    <div className={styles.layout}>
      <Header title={title} setTitle={setTitle} shapes={shapes} setShapes={setShapes} />

      <div className={styles.contents}>
        <div className={styles.boardAndCounterWrapper}>
          <Board
            addShape={addShape}
            selectedPainting={selectedPainting}
            setSelectedPainting={setSelectedPainting}
            shapes={shapes}
            removeShape={removeShape}
          />
          <Counter shapes={shapes}/>
        </div>

        <Sidebar
          selectedPainting={selectedPainting}
          setSelectedPainting={setSelectedPainting}
        />
      </div>
    </div>
  )
}

export default App
