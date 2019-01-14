var grille = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];

function getNombreCellulesVivantes(x, y) {
    var Alive = 0;
    var _maxX = grille.length - 1;
    var _maxY = grille[0].length - 1;

    if (x > 0 && y > 0 && grille[x-1][y-1] == 1)
        Alive++;
    if (y > 0 && grille[x][y-1] == 1)
        Alive++;    
    if (x < _maxX && y > 0 && grille[x+1][y-1] == 1)
        Alive++;
    if (x > 0 && grille[x-1][y] == 1)
        Alive++; 
    if (x < _maxX && grille[x+1][y] == 1)
        Alive++;
    if (x > 0 && y < _maxY && grille[x-1][y+1] == 1)
        Alive++;
    if (y < _maxY && grille[x][y+1] == 1)
        Alive++;    
    if (y < _maxY && x < _maxX && grille[x+1][y+1] == 1)
        Alive++;

    return Alive;
}

// On parcours la grille
for (indexLigne = 0; indexLigne < 5; indexLigne++) {
    for (indexColonne = 0; indexColonne < 5; indexColonne++) {

    }
}

function calculEtatCelluleMorteTPlus1(x,y){
    var nbVoisinsVivants = getNombreCellulesVivantes(x,y);

    if (nbVoisinsVivants < 2 || nbVoisinsVivants > 3)
        return 0;
        
    return 1;
    
}