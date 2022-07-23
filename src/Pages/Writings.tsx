import { Grid, Box, Heading, Text, Card, Button, CardBody, CardFooter, CardHeader, ResponsiveContext } from "grommet";
import { Deploy } from "grommet-icons";
import { CSSProperties } from "react";
import WritingIndex from "../content/WritingIndex";
import WritingCard from "../components/WritingCard";
import { ResponsiveGrid } from "../library/ResponsiveGrid";

const columns = {
    small: ['0','auto','0'],
    medium: ['xxsmall','auto','xxsmall'],
    large: ['auto', 'large', 'auto'],
};

const rows = {
    small: ['xsmall', 'auto'],
    medium: ['small', 'auto'],
    large: ['small', 'auto'],
};

export default function () {

    const allWritings = WritingIndex();
    const writingNodes = allWritings.map((writing) => {
        return <WritingCard key={writing.title} {...writing} />;
    });

    
    return <ResponsiveGrid
        rows={rows}
        columns={columns}
        areas={[
            { name: 'header', start: [0, 0], end: [2, 0] },
            { name: 'main', start: [1, 1], end: [1, 1] }
        ]}>   

        <Box gridArea="header" margin={{vertical: 'medium'}}>
            <Heading 
                color={'accent'}
                level='2' 
                margin='none' 
                textAlign="center"
                fill={true}
                style={{ cursor: 'pointer' }}>
                    Writings
            </Heading>
        </Box>

        <Box gridArea="main">
            {writingNodes}
        </Box>
    </ResponsiveGrid>
    
        
}

