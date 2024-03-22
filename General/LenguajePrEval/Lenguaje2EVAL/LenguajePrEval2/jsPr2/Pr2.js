

function factorial(){
    let n=document.getElementById('n').value;
    let resultadoFactorial=1;//Se le asigna uno para que el factorial no sea 0
    for(let i=1; i<=n; i++){
        resultadoFactorial=resultadoFactorial*i;//Calculo del factorial desde 1 hasta n
    }
    document.getElementById('resultadoFactorial').textContent=resultadoFactorial;
}
    //let nPotencia=document.getElementById('n').value;
function potencia(nPotencia){
    nPotencia=document.getElementById('n').value;
    let x=document.getElementById('x').value;
    let resultadoPot=x;
    for(let i=1; i<nPotencia; i++){
        resultadoPot=resultadoPot*x;
    }
    document.getElementById('resultadoPotencia').textContent=resultadoPot;
}



let resultSum=0;
function sumatorio(){
    let nSum=document.getElementById('n').value;
    for(let i=0; i<=nSum; i++){
        resultSum=resultSum+coseno();
    }
    document.getElementById('resultadoCoseno').textContent=resultSum;
}

function coseno(){
    let nCoseno=document.getElementById('n').value;
    let xCoseno=document.getElementById('x').value;
    if (nCoseno === 0 || nCoseno === 1) return 1; 
    //Calcula numerador llamando a potencia
    let numer=Math.pow(-1,nCoseno);
    let divi=factorial2();
    //let multi=Math.pow((xCoseno,2*nCoseno));
    let multiPot=2*nCoseno;
    resultPote=xCoseno;
    for(let i=0; i<multiPot; i++){
        resultPote=resultPote*multiPot;
    }
    let resultDiv=(numer/divi);
    resultado=resultDiv*resultPote;
    return resultado;
    
}

/*ANTIGUO
function coseno(){
    let nCoseno=document.getElementById('n').value;
    let xCoseno=document.getElementById('x').value;
    if (nCoseno === 0 || nCoseno === 1) return 1; 
    //Calcula numerador llamando a potencia
    let numer=Math.pow(-1,nCoseno);
    let divi=factorial2();
    //let multi=Math.pow((xCoseno,2*nCoseno));
    let multiPot=2*nCoseno;
    resultPote=xCoseno;
    for(let i=0; i<multiPot; i++){
        resultPote=resultPote*multiPot;
    }
    let resultDiv=(numer/divi);
    resultado=resultDiv*resultPote;
    return resultado;
    
}*/


function factorial2(){
    let n=document.getElementById('n').value;
    let n2=n*2;
    let resultadoFactorial=1;//Se le asigna uno para que el factorial no sea 0
    for(let i=1; i<=n2; i++){
        resultadoFactorial=resultadoFactorial*i;//Calculo del factorial desde 1 hasta n
    }
    return resultadoFactorial;

}

/*function factorialNo(){
    if (n === 0 || n === 1) return 1; 
    let result = 1; 
    for (let i = i; i <= n; i++){ 
        result *= i; 
    } return result;
}*/
    