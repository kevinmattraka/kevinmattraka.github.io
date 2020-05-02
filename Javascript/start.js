//this is how the player starts the game for the first time
function startgame() {
    var state = {
        started: true,
        chargepower: 1,
        copper:0
    };
    save(state);
    var x = document.getElementById("start");
    var y = document.getElementById("everything");
    //removes the startgame button
    x.style.display = "none";
    //shows the rest of the game
    y.style.display = "block";
}