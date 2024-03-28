var age = 70;
var user = "senior";
if (age <= 12 || user == "children") {
    console.log("The children ticket fee is 500");
}
else if (age <= 25 || user == "Adult") {
    console.log("the adult ticket fee is 1000 ");
}
else if (age <= 60 || user == "Respectedperson") {
    console.log("the Respectedperson fee is 400");
}
else {
    console.log("No entry");
}
