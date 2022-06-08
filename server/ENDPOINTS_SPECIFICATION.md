# ENDPOINTS SPECIFICATION

## GET CALENDAR

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