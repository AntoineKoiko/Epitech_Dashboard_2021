# **Dashboard API - Services**

## **Version**

v1.0.0

## **Author**

- aurelien.joncour@epitech.eu

## **Tech choice**

This API is a node-js api made with the ExpressJS framework.
It's taking part of the Dashboard API.

## **Description**

This part of API is used to retrieve widget datan in function of the used service:

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
    "data": {
    "kind":"Listing",
    "data":{
        "after":"t3_r95fyb",
        "dist":25,
        "modhash":null,
        "geo_filter":"",
        "children":[
            {
                "kind":"t3",
                "data":{
                    "approved_at_utc":null,
                    "subreddit":"mac",
                    "selftext":"I'm doing this to test a battery life problem, will running it on a different volume negatively impact the battery life in any way?",
                    "author_fullname":"t2_7phs98r7",
                    "saved":false,
                    "mod_reason_title":null,
                    "gilded":0,
                    "clicked":false,
                    "title":"Installing Mac OS on a different APFS volume",
                    "link_flair_richtext":[
                        {
                            "e":"text",
                            "t":"Question"
                        }
                    ],
                    "subreddit_name_prefixed":"r/mac",
                    "hidden":false,
                    "pwls":6,
                    "link_flair_css_class":"",
                    "downs":0,
                    "thumbnail_height":null,
                    "top_awarded_type":null,
                    "hide_score":true,
                    "name":"t3_r9dirr",
                    "quarantine":false,
                    "link_flair_text_color":"light",
                    "upvote_ratio":1,
                    "author_flair_background_color":null,
                    "subreddit_type":"public",
                    "ups":1,
                    "total_awards_received":0,
                    "media_embed":{

                    },
                    "thumbnail_width":null,
                    "author_flair_template_id":null,
                    "is_original_content":false,
                    "user_reports":[

                    ],
                    "secure_media":null,
                    "is_reddit_media_domain":false,
                    "is_meta":false,
                    "category":null,
                    "secure_media_embed":{

                    },
                    "link_flair_text":"Question",
                    "can_mod_post":false,
                    "score":1,
                    "approved_by":null,
                    "is_created_from_ads_ui":false,
                    "author_premium":false,
                    "thumbnail":"self",
                    "edited":false,
                    "author_flair_css_class":null,
                    "author_flair_richtext":[

                    ],
                    "gildings":{

                    },
                    "content_categories":null,
                    "is_self":true,
                    "mod_note":null,
                    "created":1638702413,
                    "link_flair_type":"richtext",
                    "wls":6,
                    "removed_by_category":null,
                    "banned_by":null,
                    "author_flair_type":"text",
                    "domain":"self.mac",
                    "allow_live_comments":false,
                    "selftext_html":"&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;I&amp;#39;m doing this to test a battery life problem, will running it on a different volume negatively impact the battery life in any way?&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
                    "likes":null,
                    "suggested_sort":null,
                    "banned_at_utc":null,
                    "view_count":null,
                    "archived":false,
                    "no_follow":true,
                    "is_crosspostable":true,
                    "pinned":false,
                    "over_18":false,
                    "all_awardings":[   ],
                    "awarders":[],
                    "media_only":false,
                    "link_flair_template_id":"d5d84890-54f2-11e9-9e18-0e417f726f32",
                    "can_gild":true,
                    "spoiler":false,
                    "locked":false,
                    "author_flair_text":null,
                    "treatment_tags":[],
                    "visited":false,
                    "removed_by":null,
                    "num_reports":null,
                    "distinguished":null,
                    "subreddit_id":"t5_2qh4u",
                    "author_is_blocked":false,
                    "mod_reason_by":null,
                    "removal_reason":null,
                    "link_flair_background_color":"#c5a9df",
                    "id":"r9dirr",
                    "is_robot_indexable":true,
                    "report_reasons":null,
                    "author":"Ok_Astronomer_1308",
                    "discussion_type":null,
                    "num_comments":0,
                    "send_replies":true,
                    "whitelist_status":"all_ads",
                    "contest_mode":false,
                    "mod_reports":[],
                    "author_patreon_flair":false,
                    "author_flair_text_color":null,
                    "permalink":"/r/mac/comments/r9dirr/installing_mac_os_on_a_different_apfs_volume/",
                    "parent_whitelist_status":"all_ads",
                    "stickied":false,
                    "url":"https://www.reddit.com/r/mac/comments/r9dirr/installing_mac_os_on_a_different_apfs_volume/",
                    "subreddit_subscribers":2468831,
                    "created_utc":1638702413,
                    "num_crossposts":0,
                    "media":null,
                    "is_video":false
                }
            },
        ],
        "before":null
    }
}
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
    "data": { "items":[
        {
            "album":{
                "album_type":"ALBUM",
                "artists":[
                    {
                        "external_urls":{
                            "spotify":"https://open.spotify.com/artist/4ksCwAPgMi8rkQwwR3nMos"
                        },
                        "href":"https://api.spotify.com/v1/artists/4ksCwAPgMi8rkQwwR3nMos",
                        "id":"4ksCwAPgMi8rkQwwR3nMos",
                        "name":"Noir Désir",
                        "type":"artist",
                        "uri":"spotify:artist:4ksCwAPgMi8rkQwwR3nMos"
                    }
                ],
                "available_markets":["AD",],
                "external_urls":{
                    "spotify":"https://open.spotify.com/album/1OIRFnpHDRBQHAmFOAxCWT"
                },
                "href":"https://api.spotify.com/v1/albums/1OIRFnpHDRBQHAmFOAxCWT",
                "id":"1OIRFnpHDRBQHAmFOAxCWT",
                "images":[
                    {
                        "height":640,
                        "url":"https://i.scdn.co/image/ab67616d0000b273c2e74b9a8b0406f6f4e80652",
                        "width":640
                    },
                ],
                "name":"666.667 Club",
                "release_date":"1996-01-01",
                "release_date_precision":"day",
                "total_tracks":13,
                "type":"album",
                "uri":"spotify:album:1OIRFnpHDRBQHAmFOAxCWT"
            },
            "artists":[
                {
                    "external_urls":{
                        "spotify":"https://open.spotify.com/artist/4ksCwAPgMi8rkQwwR3nMos"
                    },
                    "href":"https://api.spotify.com/v1/artists/4ksCwAPgMi8rkQwwR3nMos",
                    "id":"4ksCwAPgMi8rkQwwR3nMos",
                    "name":"Noir Désir",
                    "type":"artist",
                    "uri":"spotify:artist:4ksCwAPgMi8rkQwwR3nMos"
                }
            ],
            "available_markets":["AD",],
            "disc_number":1,
            "duration_ms":225933,
            "explicit":false,
            "external_ids":{
                "isrc":"FRZ019601940"
            },
            "external_urls":{
                "spotify":"https://open.spotify.com/track/637T4loKlXPwfUdQVZjPTV"
            },
            "href":"https://api.spotify.com/v1/tracks/637T4loKlXPwfUdQVZjPTV",
            "id":"637T4loKlXPwfUdQVZjPTV",
            "is_local":false,
            "name":"L'homme pressé",
            "popularity":57,
            "preview_url":"https://p.scdn.co/mp3-preview/9a5adb28b68d268c0fce3d002b49bae02c4ace57?cid=f5584dcb95ab4c9597730e2dde41801e",
            "track_number":9,
            "type":"track",
            "uri":"spotify:track:637T4loKlXPwfUdQVZjPTV"
        },
    ],
    "total":50,
    "limit":20,
    "offset":0,
    "href":"https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
    "previous":null,
    "next":"https://api.spotify.com/v1/me/top/tracks?limit=20&offset=20&time_range=long_term"
}
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
    "data": { "items":[
        {
            "external_urls":{
                "spotify":"https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
            },
            "followers":{
                "href":null,
                "total":6736809
            },
            "genres":[
                "alternative rock",
            ],
            "href":"https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
            "id":"12Chz98pHFMPJEknJQMWvI",
            "images":[
                {
                    "height":640,
                    "url":"https://i.scdn.co/image/ab6761610000e5ebb506164c3174bb7123a41424",
                    "width":640
                },
            ],
            "name":"Muse",
            "popularity":77,
            "type":"artist",
            "uri":"spotify:artist:12Chz98pHFMPJEknJQMWvI"
        },
    ],
    "total":50,
    "limit":20,
    "offset":0,
    "href":"https://api.spotify.com/v1/me/top/artists?time_range=long_term",
    "previous":null,
    "next":"https://api.spotify.com/v1/me/top/artists?limit=20&offset=20&time_range=long_term"
}
}
```

### **Youtube**

##### **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get video last comments | `GET` | `/youtube/comments?video_id={id}` |
| Get channel's statistics | `GET` | `/youtube/channelStats?channel_id={id}` |

____

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
    "data": [
    {
        "kind":"youtube#commentThread",
        "etag":"KDoMvTI0LwtsOLrAOrdw4UBxsXw",
        "id":"UgwsxiRNcIsZF4kTgC14AaABAg",
        "snippet":{
            "videoId":"yeYGZmnW_kc",
            "topLevelComment":{
                "kind":"youtube#comment",
                "etag":"r8HDy5QYwSFk1ybSQdPCHTJH5eg",
                "id":"UgwsxiRNcIsZF4kTgC14AaABAg",
                "snippet":{
                    "videoId":"yeYGZmnW_kc",
                    "textDisplay":"je veux gagner pas rien !<br>j&#39;ai regarder toute les vidéos ftp je te suis depuis Holycube saison 2. Continue comme ca c&#39;est un plaisir !",
                    "textOriginal":"je veux gagner pas rien !\nj'ai regarder toute les vidéos ftp je te suis depuis Holycube saison 2. Continue comme ca c'est un plaisir !",
                    "authorDisplayName":"Skybou Dems",
                    "authorProfileImageUrl":"https://yt3.ggpht.com/ytc/AKedOLRZ22QKEOQUDZgjZpBAr2A4ET1-xmsNJKYaYKK5XA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl":"http://www.youtube.com/channel/UCd8YMRlwY8X-ARya5bm1kUg",
                    "authorChannelId":{
                        "value":"UCd8YMRlwY8X-ARya5bm1kUg"
                    },
                    "canRate":true,
                    "viewerRating":"none",
                    "likeCount":5,
                    "publishedAt":"2021-11-18T11:55:01Z",
                    "updatedAt":"2021-11-18T11:55:01Z"
                }
            },
            "canReply":true,
            "totalReplyCount":4,
            "isPublic":true
        },
        "replies":{
            "comments":[
                {
                    "kind":"youtube#comment",
                    "etag":"GyQ_HZ2NfJuLf6oiGMfyMUJpAbw",
                    "id":"UgwsxiRNcIsZF4kTgC14AaABAg.9Ut8ueiQU_q9VDNKO7eadF",
                    "snippet":{
                        "videoId":"yeYGZmnW_kc",
                        "textDisplay":"@Aypierre je me connecte et je te repond sur Twitter",
                        "textOriginal":"@Aypierre je me connecte et je te repond sur Twitter",
                        "parentId":"UgwsxiRNcIsZF4kTgC14AaABAg",
                        "authorDisplayName":"Skybou Dems",
                        "authorProfileImageUrl":"https://yt3.ggpht.com/ytc/AKedOLRZ22QKEOQUDZgjZpBAr2A4ET1-xmsNJKYaYKK5XA=s48-c-k-c0x00ffffff-no-rj",
                        "authorChannelUrl":"http://www.youtube.com/channel/UCd8YMRlwY8X-ARya5bm1kUg",
                        "authorChannelId":{
                            "value":"UCd8YMRlwY8X-ARya5bm1kUg"
                        },
                        "canRate":true,
                        "viewerRating":"none",
                        "likeCount":0,
                        "publishedAt":"2021-11-26T17:45:03Z",
                        "updatedAt":"2021-11-26T17:45:03Z"
                    }
                },
            ]
        }
    },
]
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
    "data": {
        "viewCount":"2210233127",
        "subscriberCount":"20400000",
        "hiddenSubscriberCount":false,
        "videoCount":"3777"
    }
}
```