# ⚽ Sports Products Management Web Page

A web page to manage a sport store stock.

## 💻 About this project

This is a web page with which the user can manage the products of a sport store stock.The front-end is built in React and the back-end in Java and using Spring framework. 

The API has endpoints that allow the users to: register new products, search a product by ID, search all products, update a product by ID and delete a product by ID.
The back-end and front-end available endpoints are listed in a section below. 

## 🛠️ Built with

<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /></a>
<a href="https://www.docker.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://www.java.com/en/download/help/whatis_java.html" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" /></a>
<a href="https://www.mysql.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" /></a>
<a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" /></a>
<a href="https://spring.io/quickstart" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring" /></a>

## 🎯 Used skills

- Front-end development with React.js;
- React Hooks;
- Spring Boot;
- Spring Actuator;
- Spring Data JPA
- RESTful API development;
- Controller, service and persistence layers architecture;
- Java Exceptions handling;
- MySQL database;
- App dockerization.

## 🏁 Getting started

### 🐋 Installing Docker and Docker Compose

As the project is containerized, to run the application you will need to install Docker and Docker
Compose. The Docker version used in this project was 24.0.7. You can
see [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
how to install it. The Docker Compose version used was 2.5.0. You can
see [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt)
or in the [docs](https://docs.docker.com/compose/install/) how to install it.

> ⚠️ <b>Before containers creation</b>:
>
> This project has a seeder for the farms table. If you want to unable it, you must comment
> the `/src/main/java/com/nunessports/productssystem/initializer/DatabaseSeeder.java` file content before run the commands bellow.

### 📦🏃‍♀ Creating Docker containers and running the application

In project root terminal, run:

```
docker-compose up -d
```

Once the container is created (or after starting the container), the application will start running automatically, unless the ports (8080, 5173, 3306) are already in use. You can start the containers with `docker start <container_name>` after stopping the processes using the ports. You can stop the containers running with `docker stop <container_name>`. 

| Container | PORT |
|  :-----:  | :--: |
| nunes-sports-frontend | 5173 |
| nunes-sports-backend | 8080 |
| nunes-sports-db | 3306 |

## 🛣️ Front-end available endpoints

The front-end layer has the following endpoints:

| Page | Endpoint |
| :--: | :------: |
| 1) Products table | http://localhost:5173/ |
| 2) Product edition | http://localhost:5173/edit/:id |
| 3) Register a new product | http://localhost:5173/register |

> The products table page (1) endpoint has an optional search parameter named `pageNumber` which can be used to directly access a certain products page. With DatabaseSeeder active, the initial table will have 6 pages.
> You can use the parameter like in `http://localhost:5173/?pageNumber=6`.
> In products table page, you have access to update or delete the products.

> The product edition page (2) endpoint has `:id` as an required parameter. The "Editar" buttons in products table page (1) sends you to this page, but if you already now the product ID, you can access it directly by endpoint, as in `http://localhost:5173/edit/1`.

> Register a new product page (3) can be accessed directly by the endpoint, or by the "Registrar novo produto" button in products table page (1).

## 🛣️ API available endpoints

To use the API services only you will can use a web browser or a client for APIs testing,
like [Thunder Client](https://www.thunderclient.com) or [Insomnia](https://insomnia.rest/download).
The API endpoints are listed in the table below, as well as some examples of request body after the
table.

Services and endpoints:
| Service | Method | Endpoint |
|  :---:  | :----: | :------: |
| Register a product | POST | http://localhost:8080/products |
| Get all products | GET | http://localhost:8080/products |
| Get a product by ID | GET | http://localhost:8080/products/{productId} |
| Delete a product by ID | DELETE | http://localhost:8080/products/{productId} |
| Update a product by ID | PUT | http://localhost:8080/products/{productId} |
| Count all products in database | GET | http://localhost:8080/products/count |

> Request body example to register or update a product:
> ```
> {
>  "name": "Bola",
>  "description": "Preta",
>  "price": 50
> }
> ```
> The `price` attribute is the only one required.

> To get a specific product, delete it or update it, the endpoint must have the product ID (`{productId}`) as in `http://localhost:8080/products/1`

## 🧪 Testing
In project root terminal, run:
```
mvn test
```
Or for execute only one test class, run:
```
mvn test -Dtest="TestClassName"
```
