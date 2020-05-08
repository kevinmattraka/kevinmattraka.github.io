function claimButtonRewards() {
    var state = load();
    state.copper +=1;
    document.getElementById("copper").innerHTML = state.copper;
    document.getElementById("charge").innerHTML = charge;
    state.rewards+=1;
    if (state.rewards == 10) {
        document.getElementById("showsilver").style.display = "block";
        state.showsilver = true;
    }
    if (state.rewards == 100) {
        document.getElementById("showgold").style.display = "block";
        state.showgold = true;
    }
    if (state.rewards == 1000) {
        document.getElementById("showplatinum").style.display = "block";
        state.showplatinum = true;
    }
    if (state.showsilver == true) {
        var getSilver = Math.random() <= 0.1;
        if (getSilver == true) {
            state.silver+=1;
            document.getElementById("silver").innerHTML = state.silver;
        }
    }
    if (state.showgold == true) {
        var getGold = Math.random() <= 0.01;
        if (getGold == true) {
            state.gold+=1;
            document.getElementById("gold").innerHTML = state.gold;
        }
    }
    if (state.showplatinum == true) {
        var getPlatinum = Math.random() <= 0.001;
        if (getPlatinum == true) {
            state.platinum+=1;
            document.getElementById("platinum").innerHTML = state.platinum;
        }
    }
    save(state);
}
    