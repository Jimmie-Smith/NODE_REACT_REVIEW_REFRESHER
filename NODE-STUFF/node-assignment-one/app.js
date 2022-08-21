const http = require("http");

const port = 3000;

let users = ["user 1", "user 2", "user 3", "user 4", "user5"];

const server = http.createServer((req, res) => {
  const method = req.method;
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head>Node Assignment One</head>");
    res.write("<h1>Hello, Welcome to the server!</h1>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/Users") {
    res.write("<html>");
    res.write("<head>Node Assignment One</head>");
    res.write("<ul>");
    for (let i = 0; i < users.length; i++) {
      res.write(`<li>${users[i]}</li></br>`);
    }
    res.write("</ul>");
    return res.end();
  }
  if (req.url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      users.push(username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(port);
