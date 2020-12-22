import React, { FunctionComponent } from 'react';
import { chrList } from './cylib';
import Band from './Band';

const Cytoband: FunctionComponent<any> = (props: any) => {
    const { color, cytobands } = props;

    return Object.keys(cytobands).length
        ? chrList.map((chr: any) => (
              <Band
                  key={chr}
                  chr={chr}
                  cytobands={cytobands[chr]}
                  color={color}
                  //   height={2.5}
              />
          ))
        : null;
};

export default Cytoband;
