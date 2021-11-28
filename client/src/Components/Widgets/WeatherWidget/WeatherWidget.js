import React from 'react';
import './WeatherWidget.css';
import WidgetFrame from '../WidgetFrame';
import '../../../Styles/GlobalStyle.css';
import Typography from "@material-ui/core/Typography";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from "@material-ui/core/Box";
import { Divider } from '@material-ui/core';
import moment from "moment";

function ForecastDailyColumn({forecastDay}) {
    return (
        <Box sx={{textAlign: "center"}}>
            <Typography variant="h7">{moment(forecastDay.date).format("ddd")}</Typography>
            <CardMedia
                component="img"
                image={forecastDay.day.condition.icon}
                sx={{width: 64}}>
            </CardMedia>
            <Typography style={{fontSize: "15px"}} component="div">{Math.round(forecastDay.day.maxtemp_c)}°C</Typography>
            <Typography style={{fontSize: "14px", color:"gray"}}>{Math.round(forecastDay.day.mintemp_c)}°C</Typography>
        </Box>
    )
}

function DailyTemperature({weatherInfo}) {
    const currentTemp = weatherInfo.current ? weatherInfo.current.temp_c : "-";
    const maxTemp = weatherInfo.current ? weatherInfo.forecast.forecastday[0].day.maxtemp_c : "-";
    const minTemp = weatherInfo.current ? weatherInfo.forecast.forecastday[0].day.mintemp_c : "-";

    return (
        <Box sx={{textAlign: "right"}}>
            <Typography variant="h6" component="div">{Math.round(currentTemp)}°C</Typography>
            <Typography style={{fontSize: "14px", color:"gray"}}>{Math.round(maxTemp)} °C / {Math.round(minTemp)} °C</Typography>
        </Box>
    )
}

function WeatherToday({weatherInfo}) {
    const iconUrl = weatherInfo.current ? weatherInfo.current.condition.icon : "";

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        image={iconUrl}
                        sx={{width: 64}}>
                    </CardMedia>
                </Grid>
                <Grid item xs={6}>
                    <DailyTemperature weatherInfo={weatherInfo}/>
                </Grid>
            </Grid>
            <Typography align="left" style={{fontSize: "14px", padding: "0% 0% 0% 5%"}}>{weatherInfo.current ? weatherInfo.current.condition.text : 'Inconnu'}</Typography>
        </>
    )
}

function WeatherWidget ({city, weatherInfo}) {
    const region = weatherInfo.location ? weatherInfo.location.region : "";
    const date = weatherInfo.location ? weatherInfo.localtime_epoch : 0;
    console.log(weatherInfo);

    return (
        <WidgetFrame title="Weather" subtitle={city}>
            <Typography variant="h5">{city}, {region}</Typography>
            <Typography variant="subtitle1" style={{color: "gray"}}>{moment(date).format("ddd, HH:mm")}</Typography>
            <WeatherToday weatherInfo={weatherInfo}/>
            <Divider style={{margin: "5% 0% 5% 0%"}}/>
            <Grid container alignItems="center" justifyContent="center">
                {
                    weatherInfo.forecast ? weatherInfo.forecast.forecastday.map((day) => {
                        return <ForecastDailyColumn forecastDay={day}/>;     
                    }) : <></>
                }
            </Grid>
            
        </WidgetFrame>
    )
}

export default WeatherWidget;
