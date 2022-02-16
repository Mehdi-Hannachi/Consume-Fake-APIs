const fs = require("fs");
const localModule = require("./localModule");

const data = fs.readFileSync(
  "./localModule.js",
  { encoding: "utf-8" },
  (err, data) => {
    err ? console.log("read file failed", err) : console.log("Data : ", data);
  }
);

console.log(data);
console.log("Welcome to the backend world");

//argv
// console.log(process);
// console.log(process.argv);

// Third-Party module

const uuid = require("uuid");

const user = {
  id: uuid.v4(),
  name: "mehdi",
  lastnam: "Hannachi",
};

// localModule

const { sum, sayHello } = localModule;

console.log(sum(+process.argv[2], +process.argv[3]));
console.log(sayHello());
console.log(user);

// Core module

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end("hello");
});

server.listen(4000, (err) => {
  err
    ? console.log("Server connectio failed")
    : console.log(`Server is running on port 4000`);
});
