var charge = 0;
function startcharger() {
    document.getElementById("charge").innerHTML = charge;
    var charger = setInterval(chargerUpdate, 10)
}
function endcharger() {
    window.clearInterval(charger);
}
function chargerUpdate() {
    var state = load();
    if (charge < (1000/state.chargepower)) {
        charge += 1;
        document.getElementById("charge").innerHTML = charge;
    }
}
function claimCharge() {
    if (charge == 1000){
        charge = 0;
        var state = load();
        state.copper +=1;
        save(state);
        document.getElementById("copper").innerHTML = state.copper;
        document.getElementById("charge").innerHTML = charge;
    }
}
    