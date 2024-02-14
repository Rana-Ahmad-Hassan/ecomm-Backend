import dotenv from "dotenv"
import { connection } from "./src/db-Config/db.js"
import { app } from "./app.js"


dotenv.config()

connection()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("server is start at", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })