function save(state) {
    localStorage.setItem("gamestate", JSON.stringify(state));
  }
function load() {
    return JSON.parse(localStorage.getItem("gamestate"));
}
function reset() {
    var state = {};
    save(state);
    browser.tabs.reload();
}
function loadprogress(){
    var state = load();
    if (state.started == true) {
        var x = document.getElementById("start");
        var y = document.getElementById("everything");
        //removes the startgame button
        x.style.display = "none";
        //shows the rest of the game
        y.style.display = "block";
    }
    document.getElementById("copper").innerHTML = state.copper;
    document.addEventListener("click", claimCharge);
    document.addEventListener("keypress", claimCharge);
    document.addEventListener("mousemove", claimCharge);
    startcharger();
}