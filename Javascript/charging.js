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
        save(state);
        document.getElementById("copper").innerHTML = state.copper;
        document.getElementById("charge").innerHTML = charge;
    }
}
    