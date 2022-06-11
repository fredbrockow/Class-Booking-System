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

<br/>

## GET A TEACHER BY ID
---

- method **GET**
- url **/teacher/teacherId**

### response format
```json
{
    "status": 200,
    "data": {
        "id": 45507237,
        "firstName": "Sebastien",
        "lastName": "Tremblay",
        "username": "sebastien.tremblay",
        "email": "sebastien.tremblay@email.com",
        "phoneNumber": "+809 1-543-492-6989 x5744"
    },
    "message": {
        "sucess": "request was successfull"
    }
}
```
other codes:

**404** : data not found

**500** : internal server error

    note: a check is done on the server side, teacherId has to be a number only (no letters or other characters) 

<br/>

## GET ALL CLASSES
---

- method **GET**
- url **/class**

### response format

```json
{
    "status": 200,
    "data": [
        {
            "id": 123456,
            "title": "Pilates",
            "imgSrc": "/public/Hatha.jpg",
            "description": "Pilates is a form of fitness that strengthens the deep muscles of the mid-body to support movement and resist environmental pressures. Pilates stretches and lengthens the major muscles of the body by correcting imbalances. It improves flexibility, strength, balance and body awareness.",
            "teacher": 82185528,
            "tag": "advanced",
            "capacity": 25,
            "isActive": true
        },
        {
            "id": 234567,
            "title": "Hatha Yoga",
            "imgSrc": "/public/Hatha.jpg",
            "description": "Learning to align and breathe well in a yoga posture is fundamental! If you are well aligned, the effects of the postures will be more profound and will make your practice more effective. These are the ideal classes to deepen your understanding of the postures and to build towards a more advanced practice.",
            "teacher": 45507237,
            "tag": "beginer",
            "capacity": 25,
            "isActive": true
        }
    ],
    "message": {"sucess": "request was successfull"}
}
```
other codes:

**404** : data not found

**500** : internal server error

<br/>

## GET A CLASS BY ID
---

- method **GET**
- url **/class/classId**

### response format
```json
{
    "status": 200,
    "data": {
        "id": 123456,
        "title": "Pilates",
        "imgSrc": "/public/Hatha.jpg",
        "description": "Pilates is a form of fitness that strengthens the deep muscles of the mid-body to support movement and resist environmental pressures. Pilates stretches and lengthens the major muscles of the body by correcting imbalances. It improves flexibility, strength, balance and body awareness.",
        "teacher": 82185528,
        "tag": "advanced",
        "capacity": 25,
        "isActive": true
    },
    "message": {
        "sucess": "request was successfull"
    }
}
```
other codes:

**404** : data not found

**500** : internal server error

    note: a check is done on the server side, classId has to be a number only (no letters or other characters) 

<br/>

## LOGIN
---

- method **POST**
- url **/login**

    verify the credentials of a user to allow / deny login

params: <br/>
- username <br/>
- password

### post request format
```json
{
    "username" : "user",
    "pwd" : "user"
}
```
### response format
```json
{
    "status": 200,
    "data": {
        "id": 1111,
        "firstName": "userFirstName",
        "lastName": "userLastName",
        "username": "user",
        "email": "userFirstName.userLastName@email.com",
        "phoneNumber": "+11 111-111-111 x11111",
        "dateOfBirth": "1111-11-11",
        "roles": [
            123456789
        ],
        "classes": [...data]
    },
    "message": "user loged in"
}
```
other codes:

**404** : data not found () (bad credentials)

**400** : username and password are required

**500** : internal server error

<br/>

# ADMIN ROUTES

<br/>

## ADD A TEACHER
---

- method **POST**
- url **/admin/teacher**

<br/>

### Add a new teacher in the database
    validation for all fields (must be present and be a string)
    check if teacher already exists (username match or email match)


### post request format
```json
{
    "firstName": "New",
    "lastName": "Teacher",
    "username": "new.teacher",
    "email": "new.teacher@email.com",
    "phoneNumber": "+54 461.977.2168 x7751" 
}
```
### response format
```json
{
    "status": 200,
    "data": {
        "id": "32c956d0-36f8-4e05-8b43-263c51341ecd",
        "firstName": "New",
        "lastName": "Teacher",
        "username": "new.teacher",
        "email": "new.teacher@email.com",
        "phoneNumber": "+54 461.977.2168 x7751"
    },
    "message": {
        "sucess": "request was successfull"
    }
}
```
other codes:


**400** : teacher username or email address alreay in the database

**400** : error during the insertion in the database

**400** : error bad format for the data sent (not present or undefined or null or not a string)

**500** : internal server error

<br/>

## ADD A CLASS
---

- method **POST**
- url **/admin/class**

<br/>

### Add a new classin the database
    validation for all fields (must be present and be a string or number or boolean depending on the field)
    check if teacher assigned to the class exists 
    check if the class already exists (for title + teacher)

    SET isActive to FALSE BY DEFAULT, SHOULD BE PUT TO TRUE WHEN THE CALL IS ADDED TO THE CALENDAR

    SRC Picture set by default untill the upload picture fonctionnality is added


### post request format
```json
  {
    "title": "New Class",
    "description": "this is a description of that new class",
    "teacher": 82185528,
    "tag": "advanced",
    "capacity": 25,
    "isActive": true
  }
```
### response format
```json
{
    "status": 200,
    "data": {
        "id": "8d21b836-02d4-457e-a691-7fceb03f816e",
        "src": "/public/Hatha.jpg",
        "title": "New Class",
        "description": "this is a description of that new class",
        "teacher": 82185528,
        "tag": "advanced",
        "capacity": 25,
        "isActive": false
    },
    "message": {
        "sucess": "request was successfull"
    }
}
```
other codes:


**400** : couldn't find a teacher to assign to this class

**400** : a class with that title and teacher already exist

**400** : error during the insertion in the database

**400** : error bad format for the data sent (not present or undefined or null or not a string)

**500** : internal server error