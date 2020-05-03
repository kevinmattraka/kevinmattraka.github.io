//this is how the player starts the game for the first time
function startgame() {
    var state = {
        started: true,
        chargepower: 1,
        copper:0,
        silver: 0,
        showsilver: false,
        gold: 0,
        showgold: false,
        platinum: 0,
        showplatinum: false,
        rewards: 0
    };
    save(state);
    loadprogress();
}