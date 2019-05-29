//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old!";

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82"
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//
//alert(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3; 
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod + ".";
//
//var result = 10 * ((5 + 3) - 4);
//
//alert(result);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//
//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes;
//    console.log("Transaction approved!");
//    console.log("Account balance is now " + myAccountBalance + ".");
//    }
//else if (nikeSBShoes - coupon <= myAccountBalance) {
//    myAccountBalance -= (nikeSBShoes - coupon);
//    console.log("Coupon used. Transaction approved!");
//    console.log("Account balance is now " + myAccountBalance + ".");
//}
//else {
//    console.log("Transaction declined.");
//}

//var age = 23;
//var joesAge = "23";
//
//if (age === joesAge) {
//    console.log("I'm the same age as Joe.");
//}

//if (1 === 1 && 2 === 3 || "Joe" === "Joe") {
//    console.log("true");
//}
//else
//    console.log("false");

//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = false;
//
//if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap) {
//    console.log ("Cat one.");
//}
//else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap) {
//    console.log ("Cat two.");
//}
//else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap) {
//    console.log ("Cat 3.");
//}

//var students = ["Timmy", "Janessa", "Arun"];
//
//var badList = [];
//
//badList.push(students[0]);
//
//var index = badList.indexOf("Timmy");
//
//console.log(badList);
//
//if (index > -1) {
//   badList.splice(index, 1);
//}
//
//console.log(badList);

//var total = 10;
//for (var x = 1; x <= total; x++) {
//    console.log(x);
//}

//var studentNames = ["John", "Jacob", "Jingle", "Heimer", "Schmidt"];
//
//for (var x = 0; x < studentNames.length; x++) {
//    console.log(studentNames[x]);
//}

//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;
//
//console.log(area1);
//console.log(area2);

//function area(length, width) {
//    return length * width;
//}
//
//var rectanglesAreas = [];
//
//rectanglesAreas.push(area(10, 15));
//rectanglesAreas.push(area(14, 2));
//rectanglesAreas.push(area(5, 4));
//
//for (var x = 0; x < rectanglesAreas.length; x++) {
//    console.log(rectanglesAreas[x]);
//}

//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    }
//    else {
//        console.log("Insufficient Funds");
//    }
//}
//
//makeTransaction(79.00);
//console.log("Your balance is now $" + bankBalance + ".");
//makeTransaction(2.32);
//console.log("Your balance is now $" + bankBalance + ".");
//makeTransaction(10.45);
//console.log("Your balance is now $" + bankBalance + ".");
//makeTransaction(450.00);
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Successful");
//    }
//    else {
//        console.log("Insufficient Funds");
//    }
//}
//
//transaction(10);
//
//var printCustomerName = function(first, last) {
//    console.log("First Name: " + first + " Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//    
//}
//
//var bankOperations = [];
//
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);

//var student0 = {
//    firstName: "Jack",
//    lastName: "Ram",
//    age: 10,
//    greeting: function () {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    }
//};

//console.log(student0.greeting());

//var student1 = {};
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Jake";
//student2.lastName = "Smith";
//student2.age = 8;

var students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function () {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
}

students.push(new Student("Jenny", "Laga", 5));
students.push(new Student("Timmy", "Turner", 8));
students.push(new Student("Carl", "Jr", 4));

for (x = 0; x < students.length; x++) {
    var student = students[x];

    for (var key in student) {
        console.log(student[key]);
    }
}
