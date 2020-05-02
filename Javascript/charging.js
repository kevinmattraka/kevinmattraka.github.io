var charge = 0;
function startcharger() {
    var state = load()
    document.getElementById("charge").innerHTML = charge;
    var charger = setInterval(chargerUpdate, (10/state.chargepower))
}
function endcharger() {
    window.clearInterval(charger);
}
function chargerUpdate() {
    if (charge < (1000)) {
        charge += 1;
        document.getElementById("charge").innerHTML = charge;
    }
}
function claimCharge() {
    if (charge == 1000){
        charge = 0;
        var state = load();
        state.copper +=1;
        document.getElementById("copper").innerHTML = state.copper;
        document.getElementById("charge").innerHTML = charge;
        state.rewards+=1;
        save(state);
    }
    if (state.rewards == 10) {
        document.getElementById("silver").style.display = "block";
    }
    if (state.rewards == 100) {
        document.getElementById("gold").style.display = "block";
    }
    if (state.rewards == 1000) {
        document.getElementById("platinum").style.display = "block";
    }
}
    