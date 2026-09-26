const express = require ("express")
const app = express()

let port = 3000

const path = require("path");

app.use(express.urlencoded({extended : true}))


app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))

app.set(express.static(path.join(__dirname , "public")))

app.get("/" , (req, res) => {

    res.send("Servering while work!")

})


app.listen(port , () => {
    console.log(`Listening to port ${port}`)
})