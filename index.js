import express from 'express';
import router from './Routes/index.js';
import { Hello } from './Controllers/GlobalControllers.js';

const app = express()

// app.use((req, res, next) => {
//     console.log("hi from middleware use")
//     //res.send("hii from middleware use")
//     next();
// })

app.get("/", function(req, res) {
    res.send("Hello Yogesh..")

})

app.get("/hello", Hello);

app.use("/api/v1", router)


app.listen(8000, () => console.log("App is running on port 8000."))