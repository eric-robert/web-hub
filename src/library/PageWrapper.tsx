import React, { Component, ReactNode } from 'react';
import { Box, Heading } from 'grommet';
import { useNavigate } from 'react-router-dom';

interface Props {
    title : String;
    icons : ReactNode
    children: ReactNode | ReactNode[];  
    color: string 
}

export default function ( props : Props ) {

    const navigate = useNavigate();

    return <Box fill>
        <>
            <Box
                tag='header'
                direction='row'
                align='center'
                justify='between'
                background='offwhite'
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                style={{ zIndex: '1'}}
            >
                <Heading 
                    color={props.color}
                    level='3' 
                    margin='small' 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => {navigate('/web-hub')}}>
                    {props.title}
                </Heading>
                <div>
                    {props.icons}
                </div>
            </Box>
            {props.children}
        </>
    </Box>
}

