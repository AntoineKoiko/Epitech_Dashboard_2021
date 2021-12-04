# **Dashboard**

## **Description**

The **Dashboard** is a web application for the 3rd school year of EPITECH.
This Project is based on the [NetVibes](https://www.netvibes.com/en) website.

### **Features**

- User Management
    - Sign Up / Sign In
    - Connection with OAUTH2 Services (Spotify, Reddit, Google)
- Widget
    - Confguratin
    - Updating
    - Widget for each service
    - 2 Widgets available from the start
    - A custom refresh rate
- Saving
    - Widget saved on your account
- Customization
    - Drag & drop your widgets where you want

### **Services and Widgets**

- Stock
    - Stock Status: get the current information about a stock
- Weater
    - Actual Weather: get the current weather and forecasts for a city
- Reddit:
    - SubReddit Feed: See the last post of a subreddit and get on it easily
- Spotify
    - Top Tracks: see tracks in your top for a given period
    - Top Artists: see artists in your top for a given period
- Youtube
    - Channel status: get information about a channel (views, subscribers, video count)
    - Video Comment: get last comments of a video

## **Architecture**

Our project is divide in two pats:

- An ExpressJS server
- A ReactJS frontend

### **The services**

- Users API
- Widget API
- Stock API
- Weather API
- Reddit API
- Spotify API
- Youtube API
- Frontend

## **Get Startedt**

Our project uses `docker-compose`.

### **Docker compose**

Docker compose is used for **local environment only**.

To build the project: `$> docker-compose build`

To run the project: `$> docker-compose up`


## **Frontend**

The frontend is available at `http://localhost:3000` (on local env).

We used ReactJS. Why did we?

We use ReactJS beceause it's a framework used by many companies. Indeed, it's good skill
to have and can allow to make mobil devloppement easily with React-Native. More over
ReactJS it's pretty easy to start to handle and allow to produce quickly a nice stuff.

## **Backend**

The backend is available at `http://localhost:8000` (on local env).

We used EpressJS. Why did we?

We have chosen EpressJS because it's becoming more and more popular and permit to setup quickly a server API. Moreover it allow to categorized easily services and get a clean and easy to use and maintain API.

## **Authors**

- aurelien.joncour@epitech.eu
- antoine.couacault@epitech.eu
