import React from 'react';
import classes from './classes.module.scss';
import { gieStains } from './cylib';

const Band = (props: any) => {
    const { height, chr, cytobands, color } = props;
    return (
        <>
            <h5 className={classes.header}>{chr}</h5>
            <div className={classes.bandContainer}>
                {cytobands.map((band: any) => (
                    <div
                        key={band.chromStart}
                        className={
                            band.gieStain === 'acen'
                                ? classes.acen
                                : classes.band
                        }
                        style={{
                            // height,
                            flexGrow: band.ratio,
                            opacity: gieStains[band.gieStain].value,
                            background:
                                band.gieStain === 'acen' ? '#cd5c5c' : color
                        }}
                    >
                        <span className={classes.cytobandName}>
                            {band.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Band;
