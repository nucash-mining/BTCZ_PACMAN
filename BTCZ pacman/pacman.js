var world = [
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [4,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,1,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,1,4],
    [4,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,4],
    [4,1,1,1,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,1,1,1,4],
    [4,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,4],
    [4,1,2,1,2,1,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,1,2,1,2,1,4],
    [4,1,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,2,1,4],
    [4,1,2,1,1,1,2,2,2,2,1,2,2,2,3,2,1,1,2,3,2,1,2,1,2,1,4],
    [4,1,2,1,2,1,2,3,2,1,1,2,3,2,2,2,1,2,2,2,2,1,1,1,2,1,4],
    [4,1,2,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,4],
    [4,1,2,1,2,1,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2,1,2,1,2,1,4],
    [4,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,4],
    [4,1,1,1,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,1,1,1,4],
    [4,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,4],
    [4,1,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,1,4],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
];

// Pacman's coordinates
var pacman = {
    x: 1,
    y: 1
};

// Updatable score
var score = 0;

// Create the world
function displayWorld(){
    var output = "";
    for (var i = 0; i < world.length; i++){
        output += "<div class=row>\n"
        for (var j = 0; j < world[i].length; j++){
            if (world[i][j] == 2)
                output += "<div class=brick></div>";
            else if (world[i][j] == 1)
                output += "<div class=ether></div>";
            if (world[i][j] == 0)
                output += "<div class=empty></div>";
            else if (world[i][j] == 3)
                output += "<div class=bitcoin></div>"
            if (world[i][j] == 4)
                output += "<div class=brick></div>";
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}

// Update Pacman's location
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
}

// Update scoreboard
function displayScore(){
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

// Map arrow keys to movement & direction
document.onkeydown = function(e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2 && world[pacman.y][pacman.x - 1] != 4){
        document.getElementById('pacman').style.backgroundImage = "url('pacman2.gif')";
        pacman.x--;
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2&& world[pacman.y][pacman.x + 1] != 4){
        document.getElementById('pacman').style.backgroundImage = "url('pacman1.gif')";
        pacman.x++;                
    }
    else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2 && world[pacman.y - 1][pacman.x] != 4){
        document.getElementById('pacman').style.backgroundImage = "url('pacman3.gif')";
        pacman.y--;                
    }
    else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2 && world[pacman.y + 1][pacman.x] != 4){
        document.getElementById('pacman').style.backgroundImage = "url('pacman4.gif')";
        pacman.y++;                
    }

    // If Pacman goes where ether is, update ether to empty & add $3
    if (world[pacman.y][pacman.x] === 1){
        world[pacman.y][pacman.x] = 0;
        score += 3;
        displayWorld();
        displayScore();
    }

    // If Pacman goes where bitcoin is, update bitcoin to empty & add $40
    if (world[pacman.y][pacman.x] === 3){
        world[pacman.y][pacman.x] = 0;
        score += 40;
        displayWorld();
        displayScore();
    }

    // Update Pacman's location
    displayPacman();
}