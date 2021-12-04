# **Dashboard API - Widget**

## **Version**

v1.0.0

## **Author**

- aurelien.joncour@epitech.eu

## **Tech choice**

This API is a node-js api made with the ExpressJS framework.
It's taking part of the Dashboard API.

## **Description**

This part of API is used to handle widget of a connected user:

- Create Widget
- Update Widget
- Delete Widget
- Get Widget

## **Base Route**

### ***Development URL***

- http://localhost:8000

## **Routes**

| Action | Method | Route |
| ---- | ---- | ---- |
| Get all widget | `GET` | `/widgets/` |
| Get widget by id | `GET` | `/widgets/:id` |
| Create widget | `POST` | `/widgets/` |
| Update Widget | `PUT` | `/widgets/?id={id}` |

### **Routes description**

#### **Get all widgets**

Request type: `GET`.

URL: `/widgets`.

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": [
    {
        "service":"weather",
        "type":"actual_weather",
        "params":{
            "params1":"Renn"
        },
        "refresh":3600,
        "_id":"61aba0e37617289d72a4a76f"
    },
    ]
}
```

____

#### **Get widget by id**

Request type: `GET`.

URL: `/widgets/:id`.

`id` is the id of the widget to get

Here is an example of a **response**:
```json
{
    "status": "success",
    "code": 200,
    "data": {
        "service":"weather",
        "type":"actual_weather",
        "params":{
            "params1":"Renn"
        },
        "refresh":3600,
        "_id":"61aba0e37617289d72a4a76f"
    }
}
```

____


#### **Create widget**

Request type: `POST`.

URL: `/widgets/`.

Here is an example of a **body** content:
```json
{
    "body": {
        "service": "weather",
        "type": "actual_weather",
        "params": {
            "params1": "Paris"
        },
        "refresh": 60,
    }
}
```

____


#### **Update widget**

Request type: `PUT`.

URL: `/widgets/?id={id}`.

`id` is the id of the widget to update

Here is an example of a **body** content:
```json
{
    "body": {
        "service": "weather",
        "type": "actual_weather",
        "params": {
            "params1": "Laval"
        },
        "refresh": 3600,
    }
}
```
