var length = null;
var maxValue = null;
var matrix = [];

function onGenerateClick() {
    readUserInput();
    generateInitialMatrix();
    renderMatrix("initial-matrix");
}

function readUserInput() {
    length = document.getElementById("input-size").value;
    maxValue = document.getElementById("input-maxValue").value;
}

function generateInitialMatrix() {
    matrix = [];
    for (let i=0; i<length; i++) {
        matrix.push([]);
        for (let j=0; j<length; j++) {
            let random = Math.floor(Math.random() * maxValue);
            matrix[i].push(random);
        }
    }
}

function renderMatrix(containerName) {
    let matrixHtml = "<table>";
    for (let i=0; i<matrix.length; i++) {
        matrixHtml +="<tr>";
        for (let j=0; j<matrix[i].length; j++) {
            matrixHtml += "<td>" + matrix[i][j] + "</td>";
        }
        matrixHtml +="</tr>";
    }
    matrixHtml += "</table>";
    document.getElementById(containerName).innerHTML = matrixHtml;
}

/*
var d2Array = [];
for (let i=0; i<d2Array.length; i++) {
    d2Array[i] = [];
    var randomNumber = Math.floor(Math.random() * 100);
   for (let j=0; j<=randomNumber; j++) {
        d2Array[i][j] = i+j;
    }
}
console.log(d2Array);*/
