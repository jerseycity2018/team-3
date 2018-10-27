var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/signUpForm");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var Persons = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
];

var newSignUpSchema = new mongoose.Schema({ 
    Name : String,
    Age: Number,
    Address: String,
    Phone: String,
    Email: String
});



var Persons = mongoose.model("Person", newSignUpSchema);

// var Susan = new Person({
//     Name: "Susan",
//     Age: 25,
//     Address: "4321 Kissena Blvd, NY",
//     Phone: "7462839200",
    
// })

// Susan.save(function(err, person) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("We just saved a person to a DB");
//         console.log(person);
//     }
// });

Persons.create({
     Name: "Peter",
     Age: 25,
     Address: "4321 Kissena Blvd, NY",
     Phone: "7462839200",
     Email: "susan123@gmail.com"
}, function(err, person) {
    if (err) {
        console.log("You ran into an error.");
        console.log(err);
    } else {
        console.log("New person created");
        console.log(person);
    }
})

Persons.create({
     Name: "Susan",
     Age: 25,
     Address: "4321 Kissena Blvd, NY",
     Phone: "7462839200",
     Email: "susan123@gmail.com"
}, function(err, person) {
    if (err) {
        console.log("You ran into an error.");
        console.log(err);
    } else {
        console.log("New person created");
        console.log(person);
    }
})


Persons.find({}, function(err, persons) {
    if (err) {
        console.log(err);
    } else {
        console.log("All the people");
        console.log(persons);
    }
})

app.get("/signUpDatabase", function(req, res){
    res.render("signUpDatabase",{Persons:Persons});
});

app.post("/signUpDatabase", function(req, res){
    // get data from form and add to campgrounds array
    var Name = req.body.Name;
    var Age = req.body.Age;
    var newPerson = {Name: Name, Age: Age}
    Persons.push(newPerson);
    //redirect back to campgrounds page
    res.redirect("/signUpDatabase");
});

app.get("/signUpDatabase/new", function(req, res){
   res.render("new.ejs"); 
});

// var swagSchema = new mongoose.Schema({
//     NameOfItem : String,
//     PriceOfItem : String,
//     ImageOfItem : String
// })

// var swag = mongoose.model("swag", swagSchema);



app.get("/", function(req, res){
    res.render("index");
});

app.get("/farm-info", function(req, res){
    res.render("farm-info");
});

app.get("/Eligibility", function(req, res){
    res.render("Eligibility");
});

app.get("/AmeriCorpApp2", function(req, res){
    res.render("AmeriCorpApp2");
});

app.get("/farm-checkout", function(req, res){
    res.render("farm-checkout.html");
});

app.get("/new_volunteer", function(req, res){
    res.render("new_volunteer");
});

app.get("/Checkout", function(req, res){
    res.render("Checkout");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Green City Force Server Has Started!");
});
