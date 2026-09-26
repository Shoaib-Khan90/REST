const express = require ("express")
const app = express()

let port = 3000

const path = require("path");

app.use(express.urlencoded({extended : true}))


app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"))

app.use(express.static(path.join(__dirname , "public")))

let posts = [
    {
        username : "Shoaib",
        content : "I love coding1"
    },
       {
        username : "Aqib",
        content : "I love coding2"
    },
       {
        username : "Saeed",
        content : "I love coding3"
    },
    
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs", { posts });
});


app.post ("/posts" , (req,res) => {
let {username , content} = req.body
posts.push({username , content})
res.redirect("/posts")

})

app.listen(port , () => {
    console.log(`Listening to port ${port}`)
})