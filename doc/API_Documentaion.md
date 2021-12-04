# **Dashboard API**

## **Version**

v1.0.0

## **Author**

- aurelien.joncour@epitech.eu

## **Tech choice**

This API is a node-js api made with the ExpressJS framework.

## **Description**

This API is used for all Dashboard services:

- Users API
- Widget API
- Stock API
- Weather API
- Reddit API
- Spotify API
- Youtube API

## **Base Route**

### ***Development URL***

- http://localhost:8000

## **Services**

### **Stock**

##### **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get status for one stock | `GET` | `/stock?name={stockCode}` |

### **Routes description**

#### **Get status for one stock**

Request type: `GET`.

URL: `/stock?name={stockCode}`.

`stockCode` is the code of the company (for example: `AAPL`, `MSFT`, ...)

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": {
        "currentPrice": 161.84,
        "change": -1.92,
        "percentChange": -1.1724,
        "highestPrice": 164.96,
        "lowestPrice": 159.72,
        "openPrice": 164.02,
        "prevClosePrice": 163.76,
        "timestamp": 1638565204
        }
    }
}
```

### **Weather**

##### **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get weather and forecast of a city | `GET` | `/weather?city={cityName}` |

### **Routes description**

#### **Get weather and forecast of a city**

Request type: `GET`.

URL: `/weather?city={cityName}`.

`cityName` is the city get the weather of (for example: `Paris`, `Rennes`, ...)

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": {
    "location":{
        "name":"Rennes",
        "region":"Bretagne",
        "country":"France",
        "lat":48.08,
        "lon":-1.68,
        "tz_id":"Europe/Paris",
        "localtime_epoch":1638641138,
        "localtime":"2021-12-04 19:05"
    },
    "current":{
        "last_updated_epoch":1638637200,
        "last_updated":"2021-12-04 18:00",
        "temp_c":7,
        "temp_f":44.6,
        "is_day":0,
        "condition":{
            "text":"Foyers orageux à proximité",
            "icon":"//cdn.weatherapi.com/weather/64x64/night/200.png",
            "code":1087
        },
        "wind_mph":11.9,
        "wind_kph":19.1,
        "wind_degree":260,
        "wind_dir":"W",
        "pressure_mb":1008,
        "pressure_in":29.77,
        "precip_mm":0.4,
        "precip_in":0.02,
        "humidity":76,
        "cloud":75,
        "feelslike_c":3.2,
        "feelslike_f":37.8,
        "vis_km":10,
        "vis_miles":6,
        "uv":1,
        "gust_mph":23,
        "gust_kph":37.1
    },
    "forecast":{
        "forecastday":[
            {
                "date":"2021-12-04",
                "date_epoch":1638576000,
                "day":{
                    "maxtemp_c":10.9,
                    "maxtemp_f":51.6,
                    "mintemp_c":6.1,
                    "mintemp_f":43,
                    "avgtemp_c":9.4,
                    "avgtemp_f":48.9,
                    "maxwind_mph":22.6,
                    "maxwind_kph":36.4,
                    "totalprecip_mm":6.9,
                    "totalprecip_in":0.27,
                    "avgvis_km":9.2,
                    "avgvis_miles":5,
                    "avghumidity":79,
                    "daily_will_it_rain":1,
                    "daily_chance_of_rain":98,
                    "daily_will_it_snow":0,
                    "daily_chance_of_snow":0,
                    "condition":{
                        "text":"Pluie modérée",
                        "icon":"//cdn.weatherapi.com/weather/64x64/day/302.png",
                        "code":1189
                    },
                    "uv":1
                },
                "astro":{
                    "sunrise":"08:39 AM",
                    "sunset":"05:15 PM",
                    "moonrise":"08:52 AM",
                    "moonset":"05:17 PM",
                    "moon_phase":"Waxing Crescent",
                    "moon_illumination":"7"
                },
                "hour":[
                    {
                        "time_epoch":1638572400,
                        "time":"2021-12-04 00:00",
                        "temp_c":12.6,
                        "temp_f":54.7,
                        "is_day":0,
                        "condition":{
                            "text":"Pluie éparse à proximité",
                            "icon":"//cdn.weatherapi.com/weather/64x64/night/176.png",
                            "code":1063
                        },
                        "wind_mph":21.5,
                        "wind_kph":34.6,
                        "wind_degree":244,
                        "wind_dir":"WSW",
                        "pressure_mb":1002,
                        "pressure_in":29.6,
                        "precip_mm":0.1,
                        "precip_in":0,
                        "humidity":93,
                        "cloud":100,
                        "feelslike_c":9.7,
                        "feelslike_f":49.5,
                        "windchill_c":9.7,
                        "windchill_f":49.5,
                        "heatindex_c":12.6,
                        "heatindex_f":54.7,
                        "dewpoint_c":11.5,
                        "dewpoint_f":52.7,
                        "will_it_rain":1,
                        "chance_of_rain":80,
                        "will_it_snow":0,
                        "chance_of_snow":0,
                        "vis_km":10,
                        "vis_miles":6,
                        "gust_mph":32.2,
                        "gust_kph":51.8,
                        "uv":1
                        },
                    ]
                },
            ]
        }
    }
}
```


### **Reddit**

##### **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get post from a subreddit | `GET` | `/reddit/post?name={subName}&sort={sortKind}` |

### **Routes description**

#### **Get post from a subreddit**

Request type: `GET`.

URL: `/reddit/post?name={subName}&sort={sortKind}`.

`subName` is the name of the subreddit to get posts (for example: `r/mac`, `r/Python`, ...)

`sortKin` is the way to sort post by reddit (for example: 'hot', 'new', ...)

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data":
}
```


### **Spotify**

##### **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get list of top tracks | `GET` | `/spotify/tracks?time_range={range}` |
| Get list of top artists | `GET` | `/spotify/artists?time_range={range}` |

### **Routes description**

#### **Get list of top tracks**

Request type: `GET`.

URL: `/spotify/tracks?time_range={range}`.

`range` is the period to tke in count to make the top (for example: `short_term`, `medium_term`, `long_term`)

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data":
}
```

____
#### **Get list of top artists**

Request type: `GET`.

URL: `/spotify/artists?time_range={range}`.

`range` is the period to tke in count to make the top (for example: `short_term`, `medium_term`, `long_term`)

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data":
}
```

### **Youtube**

##### **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get video last comments | `GET` | `/youtube/comments?video_id={id}` |
| Get channel's statistics | `GET` | `/youtube/channelStats?channel_id={id}` |

### **Routes description**

#### **Get video last comments**

Request type: `GET`.

URL: `/youtube/comments?video_id={id}`.

`id` is the youtube id of the video

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data":
}
```

____
#### **Get channel's statistics**

Request type: `GET`.

URL: `/youtube/channelStats?channel_id={id}`.

`id` is the youtube id of the video

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data":
}
```