function computePascal(){
    var Wert = document.getElementById("Wert").value;
    var pascal = [
        [1], //0
        [1, 1] //1
    ]
    for(let i = 2; i < Wert; i += 1) {
        let line = [1];
        for (let j = 1; j < i; j += 1) {
            line.push(pascal[i-1][j-1] + pascal[i-1][j]);
        }
        line.push(1)
        pascal.push(line);
    }
    ;
    return pascal
}

function display(pascalDisplay, displayPosition){
    var i, j;
    var Table = "";
    document.getElementById(displayPosition).innerHTML = "";

    Table += '<table border= 0 cellspacing =10>';
    for(i in Table){
        Table += '<tr>';
        for(j in pascalDisplay[i]){
            Table +='<td>' + pascalDisplay[i][j] +'</td>';
        }
        Table += '</tr>';
    }
    Table += '</table>';

    document.getElementById(displayPosition).innerHTML += (Table);
}


function printComputePascal(){
    var result = new Array();
    result = computePascal();
    display(result, "affichageTriangle");
}