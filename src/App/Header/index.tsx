import { useRef, type Dispatch, type SetStateAction } from 'react';
import styles from './styles.module.css';
import type { Shape } from '../configs';

interface PropTypes {
    shapes: Shape[];
    setShapes: Dispatch<SetStateAction<Shape[]>>
}

const Header = (props: PropTypes) => {

    const { shapes, setShapes } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const JSONToFile = () => {
        const blob = new Blob([JSON.stringify(shapes, null, 2)], {
            type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `shapes.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const importJSONClickHandler = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    return (
        <div className={styles.container}>
            <h1>Painting</h1>
            <button onClick={importJSONClickHandler}>import</button>
            <button onClick={JSONToFile}>export</button>
            <input
                className={styles.input}
                ref={inputRef}
                onChange={(e) => {
                    const uploadedFile = e.target.files?.[0];
                    if (uploadedFile) {
                        uploadedFile.text().then((uploadedJSON) => {
                            setShapes(JSON.parse(uploadedJSON) as Shape[])
                        })
                    }
                }}
                type='file'
                accept='.json'
                value="" />
        </div>
    )
}

export default Header;