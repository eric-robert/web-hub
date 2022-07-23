import { Card, CardHeader, Grid, Box, Header, Text } from "grommet";
import { CSSProperties, ReactNode } from "react";
import {useNavigate} from "react-router-dom";

interface WritingCardProps {
    title: string
    date: string
    icon: ReactNode
    path: string
    tags: string[]
}

export default function ( props : WritingCardProps ) {

    const navigate = useNavigate();
    const click = () => navigate(props.path);

    const tagBox = {
        position: 'absolute',
        bottom: '0',
        right: '0'

    } as CSSProperties;

    const dateBox = {
        position: 'absolute',
        top: '0',
        right: '0'

    } as CSSProperties;

    const tags = props.tags.map(tag => {
        return <Box 
            margin={{horizontal: 'small', vertical: 'small'}}
            key={tag} 
            style={{display: 'inline-block'}}>
                {tag}
            </Box>
    })

    const dates = <Box 
        margin={{horizontal: 'small', vertical: 'small'}}
        style={{display: 'inline-block'}}>
            {props.date}
    </Box>

    return <Card background="light-1" fill height={'small'} onClick={click}>
        <Grid
            rows={['small']}
            columns={['xsmall', 'auto', 'xxsmall']}
            areas={[]}
            gap={'small'}
            style={{position: 'relative'}}
            fill={true}>
            <Box fill justify="center" align="center">
                {props.icon}
            </Box>
            <Box fill justify="center" align="left">
                <Text size="medium">{props.title}
                </Text>
            </Box>

            <div style={tagBox}>
                { tags }
            </div>

            <div style={dateBox}>
                {dates}
            </div>

        </Grid>
        
    </Card>   
}