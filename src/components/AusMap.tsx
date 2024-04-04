//AusMap.tsx
import React, { useState } from 'react';

interface AusMapProps {
    // onRectClick: (newTotalPatients: number[]) => void; // Define prop type
    onRectClick: (newData: {
        totalPatients: number[];
        seasonTrendData: number[];
        industryTreeData: { name: string; data: { x: string; y: number }[] }[];
        stackedTestsData: number[][];
        StateAgeData: number[][];
    }) => void;
}

//const AusMap: React.FC = () => {
const AusMap: React.FC<AusMapProps> = ({ onRectClick }) => {

    const handleRectClick = (shapeId: string) => {
        setClickedShape(shapeId);
        console.log(`${shapeId} `);
        // You can add your logic for handling the click event for each rectangle here
        let newData: {
            totalPatients: number[];
            seasonTrendData: number[];
            industryTreeData: { name: string; data: { x: string; y: number }[] }[];
            stackedTestsData: number[][];
            StateAgeData: number[][];
        };
        switch (shapeId) {
            case 'NSW':
                newData = {
                    totalPatients: [35, 65],
                    seasonTrendData: [10, 20, 15, 25],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                        {
                            name: 'Agriculture',
                            data: [
                                { x: 'MDMA', y: 23 },
                                { x: 'Cannabinoids', y: 15 },
                                { x: 'Methamphetamines', y: 42 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 34 },
                                { x: 'Cocaine', y: 23 },
                                { x: 'Phentermine', y: 45 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [15, 20, 10, 15, 25],
                        // [10, 15, 20, 25, 20],
                        // [15, 25, 20, 30, 35],
                    ],
                    StateAgeData: [
                        [18, 10, 37, 13, 22],
                        [7, 24, 21, 15, 9],
                        [19, 26, 28, 20, 12]
                    ]
                };
                break;
            case 'TAS':
                newData = {
                    totalPatients: [30, 70],
                    seasonTrendData: [8, 12, 10, 15],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'Amphetamines', y: 11 },
                                { x: 'Methamphetamines', y: 20 },
                                { x: 'MDMA', y: 21 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [10, 15, 8, 12, 20],
                        // [5, 10, 12, 18, 15],
                        // [8, 13, 10, 16, 25],
                    ],
                    StateAgeData: [
                        [20, 8, 23, 26, 14],
                        [14, 22, 19, 18, 11],
                        [12, 19, 25, 21, 7]
                    ]
                };
                break;
            case 'QLD':
                newData = {
                    totalPatients: [40, 60],
                    seasonTrendData: [9, 6, 14, 17],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 34 },
                                { x: 'Cocaine', y: 23 },
                                { x: 'Phentermine', y: 45 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [12, 17, 10, 14, 22],
                        // [6, 11, 13, 19, 16],
                        // [10, 15, 12, 18, 27],
                    ],
                    StateAgeData: [
                        [27, 12, 19, 16, 24],
                        [8, 21, 14, 9, 20],
                        [16, 23, 17, 22, 11]
                    ]
                };
                break;
            case 'NT':
                newData = {
                    totalPatients: [25, 75],
                    seasonTrendData: [7, 11, 9, 14],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Agriculture',
                            data: [
                                { x: 'MDMA', y: 23 },
                                { x: 'Cannabinoids', y: 15 },
                                { x: 'Methamphetamines', y: 42 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 34 },
                                { x: 'Cocaine', y: 23 },
                                { x: 'Phentermine', y: 45 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [8, 12, 7, 11, 18],
                        // [4, 9, 10, 15, 12],
                        // [7, 11, 9, 14, 22],
                    ],
                    StateAgeData: [
                        [15, 15, 21, 7, 16],
                        [10, 17, 8, 19, 13],
                        [11, 23, 32, 18, 6]
                    ]
                };
                break;
            case 'WA':
                newData = {
                    totalPatients: [45, 55],
                    seasonTrendData: [11, 16, 13, 19],
                    industryTreeData: [
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 34 },
                                { x: 'Cocaine', y: 23 },
                                { x: 'Phentermine', y: 45 },
                            ],
                        },
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [14, 19, 12, 16, 24],
                        // [8, 13, 15, 21, 18],
                        // [12, 17, 14, 20, 29],
                    ],
                    StateAgeData: [
                        [11, 14, 9, 22, 8],
                        [19, 16, 6, 25, 12],
                        [13, 18, 7, 15, 10]
                    ]
                };
                break;
            case 'SA':
                newData = {
                    totalPatients: [20, 80],
                    seasonTrendData: [6, 5, 20, 13],
                    industryTreeData: [
                        {
                            name: 'Agriculture',
                            data: [
                                { x: 'MDMA', y: 23 },
                                { x: 'Cannabinoids', y: 15 },
                                { x: 'Methamphetamines', y: 42 },
                            ],
                        },
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 15 },
                                { x: 'Methamphetamines', y: 23 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [6, 11, 5, 9, 17],
                        // [3, 8, 9, 14, 11],
                        // [5, 10, 8, 13, 21],
                    ],
                    StateAgeData: [
                        [12, 20, 8, 15, 10],
                        [6, 18, 11, 14, 22],
                        [9, 16, 13, 25, 7]
                    ]
                };
                break;
            case 'VIC':
                newData = {
                    totalPatients: [55, 45],
                    seasonTrendData: [13, 18, 15, 21],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 20 },
                                { x: 'Methamphetamines', y: 190 },
                                { x: 'MDMA', y: 21 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 18 },
                                { x: 'Cannabinoids', y: 15 },
                                { x: 'Methamphetamines', y: 32 },
                            ],
                        },
                        {
                            name: 'Agriculture',
                            data: [
                                { x: 'MDMA', y: 13 },
                                { x: 'Cannabinoids', y: 25 },
                                { x: 'Methamphetamines', y: 22 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 14 },
                                { x: 'Cocaine', y: 33 },
                                { x: 'Phentermine', y: 25 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [16, 21, 14, 18, 26],
                        // [10, 15, 17, 23, 20],
                        // [14, 19, 16, 22, 31],
                    ],
                    StateAgeData: [
                        [7, 18, 25, 9, 11],
                        [14, 6, 22, 17, 13],
                        [19, 4, 16, 23, 30]
                    ]
                };
                break;
            case 'ACT':
                newData = {
                    totalPatients: [60, 40],
                    seasonTrendData: [15, 20, 17, 23],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [18, 23, 16, 20, 28],
                        // [12, 17, 19, 25, 22],
                        // [16, 21, 18, 24, 33],
                    ],
                    StateAgeData: [
                        [10, 15, 8, 12, 20],
                        [5, 10, 12, 18, 15],
                        [8, 13, 10, 16, 25]
                    ]
                };
                break;
            // Add cases for other shapeIds as needed
            case 'ALL':
                newData = {
                    totalPatients: [26, 74],
                    seasonTrendData: [5, 9, 7, 12],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                        {
                            name: 'Agriculture',
                            data: [
                                { x: 'MDMA', y: 13 },
                                { x: 'Cannabinoids', y: 25 },
                                { x: 'Methamphetamines', y: 22 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 14 },
                                { x: 'Cocaine', y: 33 },
                                { x: 'Phentermine', y: 25 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [10, 15, 8, 12, 20],
                        [5, 10, 12, 18, 15],
                        [8, 13, 10, 16, 25],
                    ],
                    StateAgeData: [
                        [10, 15, 8, 12, 20],
                        [5, 10, 12, 18, 15],
                        [8, 13, 10, 16, 25],
                    ]
                };
                break;
            default:
                newData = {
                    totalPatients: [26, 74],
                    seasonTrendData: [5, 9, 7, 12],
                    industryTreeData: [
                        {
                            name: 'Construction',
                            data: [
                                { x: 'Amphetamines', y: 10 },
                                { x: 'Methamphetamines', y: 60 },
                                { x: 'MDMA', y: 41 },
                            ],
                        },
                        {
                            name: 'Mining',
                            data: [
                                { x: 'Benzodiazepines', y: 10 },
                                { x: 'Cannabinoids', y: 20 },
                                { x: 'Methamphetamines', y: 51 },
                            ],
                        },
                        {
                            name: 'Agriculture',
                            data: [
                                { x: 'MDMA', y: 13 },
                                { x: 'Cannabinoids', y: 25 },
                                { x: 'Methamphetamines', y: 22 },
                            ],
                        },
                        {
                            name: 'Education',
                            data: [
                                { x: 'MDMA', y: 14 },
                                { x: 'Cocaine', y: 33 },
                                { x: 'Phentermine', y: 25 },
                            ],
                        },
                    ],
                    stackedTestsData: [
                        [10, 15, 8, 12, 20],
                        [5, 10, 12, 18, 15],
                        [8, 13, 10, 16, 25],
                    ],
                    StateAgeData: [
                        [10, 15, 8, 12, 20],
                        [5, 10, 12, 18, 15],
                        [8, 13, 10, 16, 25],
                    ]
                };
        }
        // Call the function passed from App.tsx with the new totalPatients value
        onRectClick(newData);
    };
    // const handleRectClick = (newTotalPatients: number[]) => {
    //     // Call the function passed from App.tsx with new totalPatients value
    //     onRectClick(newTotalPatients);
    //   };
    const [hoveredShape, setHoveredShape] = useState<string | null>(null);
    const handleRectHover = (shapeId: string) => {
        console.log(`hover:: ${shapeId} `);
        setHoveredShape(shapeId);
    };
    const handleRectLeave = () => {
        setHoveredShape(null);
    };

    const [clickedShape, setClickedShape] = useState<string | null>(null);
    // const handleShapeClick = (shapeId: string) => {
    //     console.log(`hover:: ${shapeId} `);

    // };
    const handleClickLeave = () => {
        // Reset the clickedShape state when mouse leaves
        setClickedShape(null);
    };
    // const getFillColor = (shapeId: string) => {
    //     // If the current shape/id matches the clickedShape, return black, else return original color
    //     return shapeId === clickedShape ? '#000000' : '#F5DDAF';
    // };

    return (
        <svg width="300" height="250" version="1.1" id="Australia" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 870 761" >

            <path id="TAS"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('TAS')}
                onMouseOver={() => handleRectHover('TAS')}
                onMouseLeave={handleRectLeave}
                className="st0"
                fill={(hoveredShape === 'TAS' || clickedShape === "TAS") ? '#e8b75d' : '#F5DDAF'}
                d="M694,675.9h-18v24.6l26,60.5h23l20-24.6l17-52l-17-8.5l-29,14.2L694,675.9z" />

            <polygon id="QLD"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('QLD')}
                onMouseOver={() => handleRectHover('QLD')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'QLD' || clickedShape === 'QLD') ? '#e8b75d' : '#F5DDAF'}
                points="603,402 870,402 870,374 849,308 790,236 718,173 691,83 663,69 640,0 620,0 610,69 598,129 566,129 538,112.5 538,331 603,331 " />

            <polygon id="NT"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('NT')}
                onMouseOver={() => handleRectHover('NT')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'NT' || clickedShape === 'NT') ? '#e8b75d' : '#F5DDAF'}
                points="488,83 530,107.8 530,331 340,331 340,69 350,69 371,21 427,5 494,15 503,32 482,69 " />

            <polygon id="WA"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('WA')}
                onMouseOver={() => handleRectHover('WA')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'WA' || clickedShape === 'WA') ? '#e8b75d' : '#F5DDAF'}
                points="325,69 332,69 332,477.8 279,487 217,529 153,529 85,567 35,549 35,529 53,495 44,457 16,376 0,303 16,244 60,215 161,187 190,156 190,129 206,114 230,114 272,58 293,51 " />

            <polygon id="SA"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('SA')}
                onMouseOver={() => handleRectHover('SA')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'SA' || clickedShape === 'SA') ? '#e8b75d' : '#F5DDAF'}
                points="340,476.4 371,471 445,487 475,549 494,549 510,527 530,527 516,563 524,583 554,583 570,610 581,642 595,645 595,339 340,339 " />

            <polygon id="VIC"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('VIC')}
                onMouseOver={() => handleRectHover('VIC')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'VIC' || clickedShape === 'VIC') ? '#e8b75d' : '#F5DDAF'}
                points="628,652 603,646.7 603,542 794.1,616.9 780,631 760,631 723,660 704,660 691,642 679,642 664,660 " />

            <path id="NSW"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('NSW')}
                onMouseOver={() => handleRectHover('NSW')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'NSW' || clickedShape === 'NSW') ? '#e8b75d' : '#F5DDAF'}
                d="M603,410v123.4l193.9,76L818,535l42-80l9.4-45H603z M789,569h-48v-48h48V569z" />

            <rect id="ACT"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('ACT')}
                onMouseOver={() => handleRectHover('ACT')}
                onMouseLeave={handleRectLeave}
                x="749" y="529"
                className="st0"
                fill={(hoveredShape === 'ACT' || clickedShape === 'ACT') ? '#e8b75d' : '#F5DDAF'}
                width="32" height="32" />

            <g id="ALL"
                style={{ cursor: 'pointer' }}
                onClick={() => handleRectClick('ALL')}
                onMouseOver={() => handleRectHover('ALL')}
                onMouseLeave={handleRectLeave}
                className="st1"
                fill={(hoveredShape === 'ALL' || clickedShape === 'ALL') ? '#e8b75d' : '#F5DDAF'}>
                <polygon points="202.2,680.4 211.9,680.4 207,664.7 	" />
                <path d="M339,623.1H159.8c-15.5,0-28,12-28,26.8v49.5c0,14.8,12.5,26.8,28,26.8H339c15.5,0,28-12,28-26.8v-49.5
		C367,635.1,354.5,623.1,339,623.1z M217.1,697.2l-2.6-8.4h-14.9l-2.6,8.4h-11.6l16.6-45.2h10.2l16.7,45.2H217.1z M271.5,697.2
		h-29.9V652h10.9v36.8h19V697.2z M315.6,697.2h-29.9V652h10.9v36.8h19V697.2z"/>
            </g>
        </svg>
    );
};

export default AusMap;
