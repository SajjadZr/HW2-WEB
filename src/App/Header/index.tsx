import { useRef, type Dispatch, type SetStateAction } from 'react';
import styles from './styles.module.css';
import type { Shape } from '../configs';

interface PropTypes {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    shapes: Shape[];
    setShapes: Dispatch<SetStateAction<Shape[]>>
}

const Header = ({ title, setTitle, shapes, setShapes }: PropTypes) => {

    // const { shapes, setShapes } = props;

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
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            style={{
                fontSize: "20px",
                border: "none",
                outline: "none",
                background: "transparent",
                flexGrow: 1
            }}
            />
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