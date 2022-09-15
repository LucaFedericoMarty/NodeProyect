const  express = require("express");
const app = express();
const port = 9000;

const users = [{
    id: 1, name: "Juan",
    id: 2, name: "Pedro",
    id: 3, name: "Valen",
    id: 4, name: "Roberto",
}];

app.get("/", (req, res) => {
    res.send("API running OK ...");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find((user) => user.id === id);

    if(!user)
        res.status(404).send("User not find");
    else
        res.status(200).json(user);
});

app.listen(port, () => {
    console.log(`> Server running on port ${port}`);
});