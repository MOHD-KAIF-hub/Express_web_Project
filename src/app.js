
const exp = require("constants");
const express=require("express");
const hbs =require("hbs");
const app=express();
const path=require("path");
const port= process.env.PORT||8000;
const haspath=path.join(__dirname,"../public");
const set_templates=path.join(__dirname,"../templates/views");
const set_templates1=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",set_templates);
hbs.registerPartials(set_templates1);
app.use(express.static(haspath));
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"!!Oops Page Not Found"
    
    });
})
app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})