import express from 'express';

const app = express();
app.use(express.static("public"));

app.listen(5050, () => {
    console.log("http://localhost:5050");
});