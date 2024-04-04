import React, { useState } from 'react';
import { Typography } from '@mui/material';
import CardNationalBar from '../components/CardNationalBar';
import CardNationalPie from '../components/CardNationalPie';
import CardStateCharts from '../components/CardStateCharts';
import ChartPanel from '../components/ChartPanel';
import ChartPanelNational from '../components/ChartPanelNational';
import AusMap from '../components/AusMap';
import { NationalPostive, NationalGender, NationalYoyCompare, NationalTopDrugs, SeasonTrend, IndustryTree, StateCategory, StateAge } from '../components/DummyChart';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif', // Use Roboto as the default font
    },
});

const ChartsPanel: React.FC = () => {
    const [totalPatients, setTotalPatients] = useState<number[]>([26, 74]);
    const totalPatientsLabels = ['Postive', 'Non-positive'];

    const totalTests = [34783, 25322, 3223];
    const totalTestsLabels = ["Male", "Female", "Others"];

    const lastYear = [49.5, -22.1, -29.1, -30.1, -30.6, -48.5, -49];
    const lastYearLabels = ["TAS", "NSW", "SA", "WA", "ACT", "VIC", "QLD"];

    const totalTest = [4.2, 8.1, 15.4, 17.2, 22.1, 6.3, 31.9, 21.5, 18.7];
    const totalTestLabels = ["Amphetamines", "Methamphetamines", "MDMA", "Phentermine", "Pseudoephedrine", "Benzodiazepines", "Cannabinoids", "Cocaine", "Opiates"];

    const [seasonTrendData, setSeasonTrendData] = useState<number[]>([5, 9, 7, 12]);
    const seasonTrendLabels = ["Summer", "Autumn", "Winter", "Spring"];

    interface DataSeries {
        name: string;
        data: { x: string; y: number }[];
      }

      const [industryTreeData, setIndustryTreeData] = useState<{ name: string; data: { x: string; y: number }[] }[]>([
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
      ]);

    const [StateCategoryData, setStateCategory] = useState<number[][]>([
        [10, 15, 8, 12, 20],
        [5, 10, 12, 18, 15],
        [8, 13, 10, 16, 25],
    ]);
    const StateCategoryLabels = ['Safety-Sensitive Jobs', 'Pre-employment', 'Random', 'Post-accident', 'Others'];
    const StateCategoryStackLabels = ['NSW', 'VIC', 'WA'];

    const [TestStateAgeData, setStateAge] = useState<number[][]>([
        [10, 15, 8, 12, 20],
        [5, 10, 12, 18, 15],
        [8, 13, 10, 16, 25],
    ]);
    const StateAgeLabels = ['18-25', '26-35', '36-45', '46-55', '>56'];
    const StateAgeStackLabels = ['Cannabinoids', 'Pseudoephedrine', 'Cocaine'];

    const handleAusMapClick = (newData: {
        // totalPatients: number[];
        seasonTrendData: number[];
        industryTreeData: { name: string; data: { x: string; y: number }[] }[];
        stackedTestsData: number[][];
        StateAgeData: number[][];
    }) => {
        // setTotalPatients(newData.totalPatients);
        setSeasonTrendData(newData.seasonTrendData);
        setIndustryTreeData(newData.industryTreeData);
        setStateCategory(newData.stackedTestsData);
        setStateAge(newData.StateAgeData);
    };


    return (
        <div style={{ backgroundColor: '#DCECF4', padding: '10px' }}>
            <div style={{ height: '36px' }}>
                <ChartPanelNational >
                    {/* <Typography variant="h6" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>National Statistic</Typography> */}
                    <ThemeProvider theme={theme}>
                        <div style={{ backgroundColor: '#DCECF4', padding: '10px' }}>
                            <Typography variant="h1" style={{ fontWeight: 'medium', color: '#395E73', fontSize: '24px' }}>
                                Nationwide Statistic
                            </Typography>
                            {/* Filter content */}
                        </div>
                    </ThemeProvider>
                </ChartPanelNational>
            </div>

            <ChartPanelNational >

                <div style={{ width: '15%', padding: '10px', marginTop: '16px', marginLeft: '8px' }}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#395E73', fontSize: '36px' }}>4,124,452</Typography>
                        <Typography variant="h6" style={{ fontWeight: 'light', color: '#395E73', fontSize: '20px', marginTop: '-10px' }}>TOTAL TESTS</Typography>
                        <br />
                        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#395E73', fontSize: '36px' }}>1,072,357</Typography>
                        <Typography variant="h6" style={{ fontWeight: 'light', color: '#395E73', fontSize: '20px', marginTop: '-10px' }}>Positive Cases</Typography>
                    </ThemeProvider>
                </div>


                <div style={{ width: '20%' }}>
                    <CardNationalPie title="Positive Rate">
                        <NationalPostive data={totalPatients} labels={totalPatientsLabels} />
                    </CardNationalPie>
                </div>

                <div style={{ width: '24%' }}>
                    <CardNationalPie title="Gender">
                        <NationalGender data={totalTests} labels={totalTestsLabels} />
                    </CardNationalPie>
                </div>

                <div style={{ width: '20%' }}>
                    <CardNationalBar title="YOY Comparing">
                        <NationalYoyCompare data={lastYear} labels={lastYearLabels} />
                    </CardNationalBar>
                </div>

                <div style={{ width: '24%' }}>
                    <CardNationalBar title="Top Drugs">
                        <NationalTopDrugs data={totalTest} labels={totalTestLabels} />
                    </CardNationalBar>
                </div>
            </ChartPanelNational>


            <div style={{ height: '36px', marginTop: '10px' }}>
                <ChartPanelNational >
                    {/* <Typography variant="h6" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>National Statistic</Typography> */}
                    <ThemeProvider theme={theme}>
                        <div style={{ padding: '10px' }}>
                            <Typography variant="h1" style={{ fontWeight: 'medium', color: '#395E73', fontSize: 24 }}>
                                Statewide Details
                            </Typography>
                            {/* Filter content */}
                        </div>
                    </ThemeProvider>
                </ChartPanelNational>
            </div>
{/* row 1 */}
            <ChartPanelNational>
                <div style={{ width: '100%', display: "flex", height: '320px' }}>
                    <div style={{ width: '26%' }}>
                        <ChartPanel>
                            <CardStateCharts title="States">
                                <AusMap onRectClick={handleAusMapClick} />
                            </CardStateCharts>
                        </ChartPanel>
                    </div>
                    <div style={{ width: '100%' }}>
                        <CardStateCharts title="Season Trend">
                            <SeasonTrend data={seasonTrendData} labels={seasonTrendLabels} />
                        </CardStateCharts>
                    </div>
                    {/* <div style={{ width: '33%', background: 'lightgreen', height: '280px', margin: '10px' }}></div> */}
                </div>
            </ChartPanelNational>

{/* row 2 */}
            <ChartPanelNational>
                <div style={{ width: '100%', display: "flex", marginTop:'-8px' }}>
                    <div style={{ width: '40%', height: '280px'}}>
                        <CardStateCharts title="Industry Tree">
                            <IndustryTree data={industryTreeData} />
                        </CardStateCharts>
                    </div>

                    <div style={{ width: '30%', height: '280px'}}>
                        <CardStateCharts title="Categories">
                            <StateCategory data={StateCategoryData} labels={StateCategoryLabels} stackLabels={StateCategoryStackLabels} />
                        </CardStateCharts>
                    </div>

                    <div style={{ width: '30%' }}>
                    <CardStateCharts title="Age Distribution">
                            <StateAge data={TestStateAgeData} labels={StateAgeLabels} stackLabels={StateAgeStackLabels} />
                        </CardStateCharts>
                    </div>
                </div>
            </ChartPanelNational>

            {/* <ChartPanel>
            </ChartPanel> */}

        </div>
    );
};

export default ChartsPanel;