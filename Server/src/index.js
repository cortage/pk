import express, { json } from "express";
import mariadb from "mariadb";
export const connection = {};
import cors from "cors";

const App = express();

App.use(
  cors({
    origin: "*",
  }),
  json()
);

App.listen(5000, async () => {
  connection.connection = await mariadb.createConnection({
    host: "localhost",
    port: 3306,
    database: "assembling",
    user: "root",
    password: "1234",
    bigIntAsNumber: true,
    insertIdAsNumber: true,
  });
  console.log(connection.connection);
  console.log("SERVER CONNECTED");
});

App.get("/get/UserInfo", async (req, res) => {
  console.log("get");
  const get = await connection.connection.query(`
    SELECT userID, LoginUser, NumofTelefon, passwordUser, emailUser, id_icon FROM UserInfo
    `);
  console.log(get);
  res.json(get);
});

App.post("/post/UserInfo", async (req, res) => {
  console.log("post icon");
  const UserIdPhoto = req.body;
  const post = await connection.connection.query(`
        update UserInfo SET id_icon = ${UserIdPhoto.id_photo}`);
  console.log(post);
  res.json(post);
});

// App.get("/get/authors", async (req, res) => {
//   console.log("get");
//   const get = await connection.connection.query(`
//     SELECT name_author, birthday_author FROM authors
//     `);
//   console.log(get);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(get);
// });

// App.get("/get/ganres", async (req, res) => {
//   console.log("get");
//   const get = await connection.connection.query(`
//     SELECT opisanie, name_ganre FROM ganres
//     `);
//   console.log(get);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(get);
// });

// App.get("/get/books", async (req, res) => {
//   console.log("get");
//   const get = await connection.connection.query(`
//     SELECT title, kolvo, id_ganre, id_author FROM books
//     `);
//   console.log(get);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(get);
// });

// App.get("/get/historymovebooks", async (req, res) => {
//   console.log("get");
//   const get = await connection.connection.query(`
//     SELECT id_book, id_reader, amount, date_out, date_in FROM historymovebooks
//     `);
//   console.log(get);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(get);
// });

// // фио читателей
// App.get("/get/fioReaders", async (req, res)=>{
//   console.log("get fio");
//   const get = await connection.connection.query(`
//   SELECT id_reader, fio FROM readers
//   `);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(get);
// })

// // название книг
// App.get("/get/titleBook", async (req, res)=>{
//   console.log("get title")
//   const get = await connection.connection.query(`
//   SELECT id_book, title FROM books
//   `);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(get);
// })

// App.post("/post/historymovebooks", async (req, res) => {
//   console.log("post historymovebooks");
//   const historymovebooks = req.body;
//   console.log(historymovebooks);
//   const post = await connection.connection.query(`
//         INSERT INTO historymovebooks(id_book, id_reader, amount, date_out, date_in) VALUES
//         (${historymovebooks.id_book}, ${historymovebooks.id_reader}, ${
//     historymovebooks.amount
//   }, ${JSON.stringify(historymovebooks.date_out)}, ${JSON.stringify(
//     historymovebooks.date_in
//   )})
//     `);
//   console.log(post);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.setHeader("Access-Control-Allow-Methods", "POST");
//   res.json(post);
// });
// App.post("/post/books", async (req, res) => {
//   console.log("post books");
//   const books = req.body;
//   const post = await connection.connection.query(`
//         INSERT INTO BOOKS(title, kolvo, id_ganre, id_author) VALUES
//         (${JSON.stringify(books.title)}, ${books.kolvo}, ${books.id_ganre}, ${
//     books.id_author
//   })`);
//   console.log(post);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(post);
// });

// App.post("/post/authors", async (req, res) => {
//   console.log("post authors");
//   const authors = req.body;
//   const post = await connection.connection.query(`
//         INSERT INTO READERS(name_author, birthday_author) VALUES
//         (${JSON.stringify(authors.name_author)}, ${JSON.stringify(
//     authors.birthday_author
//   )})
//     `);
//   console.log(post);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(post);
// });

// App.post("/post/ganres", async (req, res) => {
//   console.log("post ganres");
//   const ganres = req.body;
//   const post = await connection.connection.query(`
//         INSERT INTO READERS(opisanie, name_ganre) VALUES
//         (${JSON.stringify(ganres.opisanie)}, ${JSON.stringify(
//     ganres.name_ganre
//   )})
//     `);
//   console.log(post);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(post);
// });

// App.put("/update/readers/:id", async (req, res) => {
//   console.log("update");
//   const putBody = req.body;
//   const { id } = req.params;
//   const values = Object.entries(putBody)
//     .map(([key, value]) => {
//       let serializeValue;
//       if (typeof value === "number") {
//         serializeValue = value;
//       } else {
//         serializeValue = JSON.stringify(value);
//       }

//       return `${key} = ${serializeValue}`;
//     })
//     .join(", ");
//   const update = await connection.connection.query(`
//     UPDATE readers SET ${values}
//     WHERE id_reader = ${id};`);
//   console.log(update);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(update);
// });

// App.put("/update/authors/:id", async (req, res) => {
//   console.log("update");
//   const putBody = req.body;
//   const { id } = req.params;
//   const values = Object.entries(putBody)
//     .map(([key, value]) => {
//       let serializeValue;
//       if (typeof value === "number") {
//         serializeValue = value;
//       } else {
//         serializeValue = JSON.stringify(value);
//       }

//       return `${key} = ${serializeValue}`;
//     })
//     .join(", ");
//   const update = await connection.connection.query(`
//     UPDATE authors SET ${values}
//     WHERE id_author = ${id};`);
//   console.log(update);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(update);
// });

// App.put("/update/ganres/:id", async (req, res) => {
//   console.log("update");
//   const putBody = req.body;
//   const { id } = req.params;
//   const values = Object.entries(putBody)
//     .map(([key, value]) => {
//       let serializeValue;
//       if (typeof value === "number") {
//         serializeValue = value;
//       } else {
//         serializeValue = JSON.stringify(value);
//       }

//       return `${key} = ${serializeValue}`;
//     })
//     .join(", ");
//   const update = await connection.connection.query(`
//     UPDATE ganres SET ${values}
//     WHERE id_ganre = ${id};`);
//   console.log(update);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(update);
// });

// App.put("/update/books/:id", async (req, res) => {
//   console.log("update");
//   const putBody = req.body;
//   const { id } = req.params;
//   const values = Object.entries(putBody)
//     .map(([key, value]) => {
//       let serializeValue;
//       if (typeof value === "number") {
//         serializeValue = value;
//       } else {
//         serializeValue = JSON.stringify(value);
//       }

//       return `${key} = ${serializeValue}`;
//     })
//     .join(", ");
//   const update = await connection.connection.query(`
//     UPDATE books SET ${values}
//     WHERE id_book = ${id};`);
//   console.log(update);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.json(update);
// });

// App.put("/update/historymovebooks/:id", async (req, res) => {
//   console.log("update");
//   const putBody = req.body;
//   const { id } = req.params;
//   const values = Object.entries(putBody)
//     .map(([key, value]) => {
//       let serializeValue;
//       if (typeof value === "number") {
//         serializeValue = value;
//       } else {
//         serializeValue = JSON.stringify(value);
//       }

//       return `${key} = ${serializeValue}`;
//     })
//     .join(", ");
//   const update = await connection.connection.query(`
//     UPDATE historymovebooks SET ${values}
//     WHERE id_move = ${id};`);
//   console.log(update);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
//   res.setHeader("Access-Control-Allow-Methods", "PUT");
//   res.json(update);
// });
