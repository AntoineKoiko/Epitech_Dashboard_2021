# **Dashboard API - User**

## **Version**

v1.0.0

## **Author**

- aurelien.joncour@epitech.eu

## **Tech choice**

This API is a node-js api made with the ExpressJS framework.
It's taking part of the Dashboard API.

## **Description**

This part of API is used to handle the user management:

- Sign Up
- Sign In
- Logout
- OAUTH2

## **Base Route**

### ***Development URL***

- http://localhost:8000

## **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get if user is logged | `GET` | `/login/success` |
| Logout the user | `GET` | `/logout` |
| Login user | `GET` | `/login` |
| Login user with service | `GET` | `/login/:service` |

### **Routes description**

#### **Get if user is logged**

Request type: `GET`.

URL: `/login/success`.

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": {
        "success": true,
        "message": "user has successfully authenticated",
        "user": "John_Doe",
        "cookies": {}
    }
}
```

____

#### **Logout user**

Request type: `GET`.

URL: `/logout`.

____

#### **Login user**

Request type: `GET`.

URL: `/login`.

____

#### **Login user with service**

Request type: `GET`.

URL: `/login/:service`.

`service` is the name of the service you want to use

**Handled Services**
- Reddit: `/login/reddit`
- Spotify: `/login/spotify`
- Google: `/login/google`