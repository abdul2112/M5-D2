import express from 'express';
import fs from 'fs';
// import { fileURLToPath } from "url"
// import { dirname, join } from "path"
// import uniqid from "uniqid"

const authorsRouter = express.Router();

// const filePath = fileURLToPath(import.meta.url)
// const authorsFolderPath = dirname(filePath)
// const authorJSONPath = join(authorsFolderPath, "authors.json")

authorsRouter.post('/', (req, res) => {
  // 1. read request body
  const newAuthor = { ...req.body, createdAt: new Date(), _id: uniqid() };
  console.log(newAuthor);

  // 2. read the old content of the file authors.json

  const authors = JSON.parse(fs.readFileSync(authorJSONPath).toString());

  // 3. push the newauthor into authors array
  authors.push(newAuthor);

  // 4. write the array back into the file authors.json
  fs.writeFileSync(authorJSONPath, JSON.stringify(authors));

  // 5. send back proper response
  res.status(201).send(newAuthor._id);

  res.status(201).send(newAuthor._id);
}); // (URL, ROUTE HANDLER), Route handler (req, res) => {}

authorsRouter.get('/', (req, res) => {
  // 1. read authors.json content
  // 2. send the content as a response
});

authorsRouter.get('/:id', (req, res) => {
  console.log(req.params);

  // 1. read the content of the file

  // 2. find the one with the correspondant id

  // 3. send it as a response
});

authorsRouter.put('/:id', (req, res) => {
  // 1. read the old content of the file
  // 2. modify the specified author
  // 3. write the file with the updated list
  // 4. send a proper response
});

authorsRouter.delete('/:id', (req, res) => {
  // 1. read the old content of the file
  // 2. filter out the specified id
  // 3. write the remaining authors into the file authors.json
  // 4. send back a proper response
});

export default authorsRouter;
