let myObj = {
    name : "Domenic",
    age : 56
};

let myObj_serialized = JSON.stringify(myObj);

localStorage.setItem("myObj", myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deserialized);