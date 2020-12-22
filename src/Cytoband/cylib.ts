//
export const gieStains: any = {
    acen: { value: 1 },
    gneg: { value: 0.1 },
    gpos100: { value: 1 },
    gpos25: { value: 0.25 },
    gpos50: { value: 0.5 },
    gpos75: { value: 0.75 },
    gvar: { value: 1 },
    stalk: { value: 0 }
};

export const chrList: any = [
    'chr1',
    'chr2',
    'chr3',
    'chr4',
    'chr5',
    'chr6',
    'chr7',
    'chr8',
    'chr9',
    'chr10',
    'chr11',
    'chr12',
    'chr13',
    'chr14',
    'chr15',
    'chr16',
    'chr17',
    'chr18',
    'chr19',
    'chr20',
    'chr21',
    'chr22',
    'chrX',
    'chrY'
];

export const readFile = (files: FileList, cb: Function) => {
    var file = files.item(0);
    let reader = new FileReader();

    reader.onload = function () {
        cb(parseCtyoband(reader.result));
    };

    reader.readAsText(file!);
};

export const parseCtyoband = (text: any) => {
    let parsedChr: any[any] = [];
    let chrs: any[any] = [];
    let lines = text.split(/[\r\n]+/g);

    lines.forEach((line: any) => {
        const [chrom, chromStart, chromEnd, name, gieStain] = line.split('\t');
        if (!chrs[chrom]) chrs[chrom] = [];
        chrs[chrom].push({
            chrom,
            chromStart: Number(chromStart),
            chromEnd: Number(chromEnd),
            name,
            gieStain
        });
    });

    chrList.forEach((chrName: any) => {
        parsedChr[chrName] = getCtyoband(chrs[chrName]);
    });

    return parsedChr;
};

export const getCtyoband = (chr: any[]) => {
    const newChr: any[] = [];
    let maxLength = chr[chr.length - 1].chromEnd;
    let ratio = 0;

    chr.forEach((cytoband, i) => {
        ratio = ((cytoband.chromEnd - cytoband.chromStart) / maxLength) * 100;
        newChr[i] = { ...cytoband, ratio };
    });

    return newChr;
};
