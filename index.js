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
    let matrixHtml = "<table border='1px' cellpadding='2px' cellspacing='2px'>";
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

function onChangeClick() {
    changeMatrix(matrix);
    renderMatrix("changed-matrix");
}

function changeMatrix(renderedMatrix) {
    for (let i=0; i<renderedMatrix.length; i++) {
        for (let j=0; j<renderedMatrix[i].length; j++) {
            renderedMatrix[i][i] = 0;
        }
    }
}
