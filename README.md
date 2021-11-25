# Api Heroes

API para obtener los datos de los héroes, creada con la finalidad de poder
acceder a la data de los héroes  desde cualquier Frond-End sin restricciones de CORS

Fuente de Informacion :
* [API Heroes](https://superheroapi.com/index.html) 

Technology 
---
* Node.js >= 16.10.0

EndPoint
---
### Obtener los heroes:  
  * Realiza la búsqueda de héroes basada en un Sting especificado "nameHeroes"


|Ambiente     |Metodo                                                         | Ruta                                                            |
|-------------|---------------------------------------------------------------|-----------------------------------------------------------------|
| Local       | [GET](http://localhost:3005/heroes?nameHeroes=hu)             |http://localhost:3005/heroes?nameHeroes={nameHeroes}             |
| Production  | [GET](https://cencosud-api.herokuapp.com/heroes?nameHeroes=hu)|https://cencosud-api.herokuapp.com/heroes?nameHeroes={nameHeroes}|

### Obtener detalle de heroe :  
  * Obtiene los detalles del héroe según él, ID especificando "idHeroe"

|Ambiente     |Metodo                                                           | Ruta                                                         |
|-------------|-----------------------------------------------------------------|--------------------------------------------------------------|
| Local       | [GET](http://localhost:3001/heroes/id?idHeroe=332)              |http://localhost:3001/heroes/id?idHeroe={idHeroe}             |
| Production  | [GET](https://cencosud-api.herokuapp.com/heroes/id?idHeroe=332) |https://cencosud-api.herokuapp.com/heroes/id?idHeroe={idHeroe}|


Collaborate
---
- Autor: **Soraimar Bernal**
