// app.factory("firstService", function() {
//     // outside of the return block we can declare private variables and functions
//
//     // we must return an object, everything we return can be accessed externally
//     return {
//         sayHi: function() {
//             return "Hello!"
//         },
//         sayGoodbye: function() {
//             return "Goodbye!"
//         },
//         getAllUsers: function() {
//             // some AJAX call to our db to get all users
//             console.log("Getting all users");
//         },
//         addUser: function() {
//             // another AJAX to add user
//         }
//     }
// })

app.factory("RPNCalcService", function() {
    return {
        add: (n1, n2) => (parseFloat(n1) + parseFloat(n2)),
        substract: (n1, n2) => (parseFloat(n1) - parseFloat(n2)),
        multiply: (n1, n2) => (parseFloat(n1) * parseFloat(n2)),
        divide: (n1, n2) => (parseFloat(n1) / parseFloat(n2)),
        power: (n1, n2) => Math.pow(parseFloat(n1), parseFloat(n2))
    }
})
