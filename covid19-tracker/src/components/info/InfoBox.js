import React from 'react'
import './infobox.css'
import {Card,Typography, CardContent} from '@material-ui/core'

function InfoBox({title, cases, total, active, isRed, ...props }) {
    return (
        <div className="box">
            <Card 
                onClick={props.onClick}
                className={`infoBox ${active && "infoBox--selected"} ${
                isRed && "infoBox--red"
            }`} 
            >
                <CardContent>
                    <Typography>{title}</Typography>
                    <h2>{cases}</h2>
                    <Typography>{total} total</Typography>
                </CardContent>
            </Card>
        </div>
        
        
    )
}

export default InfoBox
