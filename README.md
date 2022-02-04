# Kino2punktnoll

# API Documentation

## Movies

**GET:**  `/movies/{id}/reviews` 

### Response

`Status: 200 OK`

```
{
    "reviews": [
        {
            "id": 1,
            "comment": "string",
            "rating": 0,
            "user": "string",
            "verified": true
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": "20",
            "pageCount": 1,
            "total": 1
        }
    }
}
```
### Parameters


| Name | Type | In | Description |
| ----------- | ----------- | ----------- | ----------- |
| `page` | Integer | query | Page number of the results to fetch. Default: `1` |
| `pageSize` | Integer | query | Results per page. Default: `20` |

## Rating
**GET:** `/movies/{id}/rating`
`returns average rating of movie.`

## Reviews

**POST:**  `/movies/{id}/reviews` 

`Status: 201 OK`

```
Request Body-required
{
  "data": {
    "comment": "string",
    "rating": 0,
    "author": "string",
    "verified": true,
    "movie": "string or id",
    "createdAt": "2022-02-03T23:42:54.711Z",
    "updatedAt": "2022-02-03T23:42:54.711Z",
    "createdBy": "string or id",
    "updatedBy": "string or id"
  }
}
```
`Status: 401`
```
Unauthorized
```

## Log in
**POST:** `login/getUser`

`Status: 200 OK`

```
Request headers
{
    "Content-Type": "application/json",
    Authorization: "Basic " + btoa(name + ":" + password),
},
```
## Screenings for one movie
**GET:** `screenings/movies/{id}`

returns all upcoming screenings for one movie, id, time & date and what room. 
```
{[
   {
   "id": 51,
   "time": "2022-02-05T19:00:00.000Z",
   "room": "Stora salongen" 
   },
]},
```

# Mötesanteckningar
Möte 04-22-01: Medverkande Johan, Haeju, Pontus, Carola, Roger

Johan: Helt färdig med post-funktion, serverlogiken och inputvalidering. Mergat postreview till main.

Haeju: Gjort klart en login/logout-funktion med JWT och testning.

Pontus: Gjort klart med sina test och Github Actions automatiska tester.

Carola: Gjort klart testet för onescreening, dvs visning för varje enskild film. 

Roger: Gör om sitt arbete pga dataförlust. Färdig för merge innan deadline

----------------------------------------------------------------------------
22-01-25 Möte:
Deltagare:
Johan
Haeju
Pontus
Carola
Roger


I denna gruppuppgift ska ni bygga nya funktioner på er Kino-sida. En funktion för att lista filmvisningar, och en funktion med vilken man ska kunna ladda upp och ta del av recensioner och betygsättning av de filmer som finns publicerade. Ni kan utgå ifrån den kod som någon av gruppmedlemmarna skrivit för föregående inlämning.

Som datakälla används samma CMS-API som tidigare, som nu utökats med funktionalitet för att läsa reviews och ladda upp reviews (se bifogad API-dokumentation) samt läsa filmvisningar.


-Vi har bestämt vilket repo som ska användas.
-Vi har delat upp uppgifterna som PBIs i Github Project

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


Möte 22-02-01: medverkande Johan, Haeju, Pontus, Carola, Roger. 

Johan: lagt till formulär som postreviews, lagt till api som tar emot req- sett så funktionaliteten fungerar. Har påbörjat en VG-uppgift för att köra automatiska tester via heroku. 

Haeju: Klar med rating, testning och allt fungerar. Påbörjat VG-uppg för JWT. 

Pontus: Klar med reviews och pagination, funderar på bättre lösningar. Håller på med testlösningar. Verifiera filtreringsfunktion. 
Har påbörjat VG-uppgift- filtrera bort reviews som inte är verified.

Carola: Skrivit om logiken serverside- börja med göra test idag. 

Roger: Påbörjat uppgiften och börjar vara färdig inom en snar framtid.

Nästa möte: fredag 4/2 kl. 20.00 sista avstämning, dokumentation av api bla.  samt planerad inlämning.
