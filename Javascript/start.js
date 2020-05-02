//this is how the player starts the game for the first time
function startgame() {
    var state = {
        started: true,
        chargepower: 1,
        copper:0,
        silver: 0,
        gold: 0,
        platinum: 0,
        rewards: 0
    };
    save(state);
    loadprogress();
}