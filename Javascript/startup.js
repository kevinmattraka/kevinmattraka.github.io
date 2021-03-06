function save(state) {
    localStorage.setItem("gamestate", JSON.stringify(state));
  }
function load() {
    return JSON.parse(localStorage.getItem("gamestate"));
}
function reset() {
    var state = {};
    save(state);
    location.reload();
}
function edit(toEdit, change) {
    var state = load();
    state[toEdit] = change;
    save(state);
}
function loadprogress(){
    var state = load();
    if (state.started == true) {
        var x = document.getElementById("start");
        var y = document.getElementById("showcopper");
        var z = document.getElementById("mainButton");
        //removes the startgame button
        x.style.display = "none";
        //shows the rest of the game
        y.style.display = "block";
        z.style.display = "block";
        if (state.showsilver == true) {
            document.getElementById("showsilver").style.display = "block";
            document.getElementById("silver").innerHTML = state.silver;
            if (state.showgold == true) {
                document.getElementById("showgold").style.display = "block";
                document.getElementById("gold").innerHTML = state.gold;
                if (state.showplatinum == true) {
                    document.getElementById("showplatinum").style.display = "block";
                    document.getElementById("platinum").innerHTML = state.platinum;
                }
            }
        }
    }
    document.getElementById("copper").innerHTML = state.copper;
}