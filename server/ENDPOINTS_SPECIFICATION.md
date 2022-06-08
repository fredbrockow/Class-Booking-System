# ENDPOINTS SPECIFICATION
<br/>

## GET CALENDAR
---
- method **GET**
- url **/calendar**

### response format

```json
{
    "status": 200,
    "data": [
        {
            "_id": "62a0997bc48eb2e074398840",
            "dayName": "monday",
            "slot1": {
                "class": "classId",
                "student": []
            },
            "slot2": {
                "class": "classId",
                "student": []
            }
        }
    ],
    "message": {"sucess": "request was successfull"}
}
```

    slots go from 1 to 6
    days go from monday to saturday

other codes:

**404** : data not found

**500** : internal server error

<br/>

## GET ALL TEACHERS
---

- method **GET**
- url **/teacher**

### response format

```json
{
    "status": 200,
    "data": [
        {
            "id": 82185528,
            "firstName": "Mathilde",
            "lastName": "Racicot",
            "username": "mathilde.racicot",
            "email": "mathilde.racicot@email.com",
            "phoneNumber": "+94 159-980-4932 x9475"
        },
        {
            "id": 45507237,
            "firstName": "Sebastien",
            "lastName": "Tremblay",
            "username": "sebastien.tremblay",
            "email": "sebastien.tremblay@email.com",
            "phoneNumber": "+809 1-543-492-6989 x5744"
        }
    ],
    "message": {"sucess": "request was successfull"}
}
```
other codes:

**404** : data not found

**500** : internal server error