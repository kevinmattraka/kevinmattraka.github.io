//this is how the player starts the game for the first time
function startgame() {
    var state = {
        started: true,
        chargepower: 1,
        copper:0
    };
    save(state);
    loadprogress();
}