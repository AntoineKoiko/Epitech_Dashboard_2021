import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';


function WidgetFrame(props) {
    return (
        <Card
            variant="outlined"
            sx={{maxWidth: 300, minWidth: 50}}
        >
            <CardHeader title={props.title} subheader={props.subtitle}/>
            {props.children}
        </Card>
    )
}

export default WidgetFrame;