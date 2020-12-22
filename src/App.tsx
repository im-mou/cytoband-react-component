import React, { FunctionComponent } from 'react';
import { readFile } from './Cytoband/cylib';
import Cytoband from './Cytoband'

const App: FunctionComponent<any> = () => {
    const [cytobands, setcytobands] = React.useState<any>({});
    const [color, setColor] = React.useState<any>('#7474e1');
    const [colorInput, setColorInput] = React.useState<any>('#7474e1');

    const setState = (data: any) => {
        setcytobands(data);
    };

    const handleUploadFile = (e: any) => {
        readFile(e.target.files, setState);
    };

    const applyColor = () => {
        if(/^#[0-9A-F]{6}$/i.test(colorInput)){
            setColor(colorInput)
        }
    }

    const updateInput = (e:any) => {
        setColorInput(e.target.value)
    }

    return (
        <div style={{margin:50}}>
            <h1>Cytoband plotter</h1>
            <div>
                <input
                    onChange={handleUploadFile}
                    type="file"
                    name="inputfile"
                />
                <br/>
                <input
                    style={{marginTop:10}}
                    type="text"
                    name="color"
                    placeholder="hex color..."
                    onChange={updateInput}
                    value={colorInput}
                />
                <button onClick={applyColor}>Apply color</button>
            </div>
            <Cytoband color={color} cytobands={cytobands} />
        </div>
    );
};

export default App;
