import React, { FunctionComponent } from 'react';
import { readFile, chrList } from './cylib';
import Band from './Band';

const Cytoband: FunctionComponent<any> = (props: any) => {
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
        console.log(e.target.value)
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
            {Object.keys(cytobands).length
                ? chrList.map((chr: any) => (
                      <Band
                          key={chr}
                          chr={chr}
                          cytobands={cytobands[chr]}
                          color={color}
                        //   height={2.5}
                      />
                  ))
                : null}
        </div>
    );
};

export default Cytoband;
