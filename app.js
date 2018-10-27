var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/signUpForm");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



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

app.get("/shop-list", function(req, res){
    res.render("shop-list");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Green City Force Server Has Started!");
});
