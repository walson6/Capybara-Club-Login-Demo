var database = firebase.database();

function save() {
    var say_something = document.getElementById("say_something").value;
    var favorite_food = document.getElementById("favorite_food").value;

    // Get the current user
    var user = firebase.auth().currentUser;

    if (user) {
        // Use the user's email as a unique identifier
        var email = user.email;
        var username = email.split('@')[0];

        // Save data to the database
        database.ref('users/' + username).set({
            email: email,
            say_something: say_something,
            favorite_food: favorite_food
        });

        alert('Added');
    } else {
        alert('User not signed in');
    }
}

function remove() {
    var user = firebase.auth().currentUser;

    var email = user.email;
    var username = email.split('@')[0];

    database.ref('users/' + username).remove()

    alert('Deleted')
}