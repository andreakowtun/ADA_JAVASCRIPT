//a)Lo que nos solicitan es dar el total de gastos en una semana. 
//b)La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular.
//c)Por último, es necesario tener el total de gastos realizados en el mes.
//d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.


const prompt=require("prompt-sync")();


const mes = [
    [11, 2500, 900, 600, 2800, 650, 1100],
    [17, 1890, 100, 130, 898, 150, 2850],
    [0, 150, 690, 1900, 1770, 500, 2500],
    [80, 125, 130, 2100, 1980, 170, 90]
];


//total de gastos en una semana
let i = parseInt(prompt('Ingrese la semana de la cual desea saber su total de gastos (1..4): '));
i--
function totalS (i){
    let totSemana = 0;
    for (let j=0; j< mes[i].length; j++){
        totSemana+=mes[i][j];
    }
    return totSemana;
}

//total por dia
let j = parseInt(prompt('Ingrese el dia del cual desea saber su total de gastos (1..7): '));
j--
function totalD (j){
    let totDia = 0;
    for (let i=0; i< mes.length; i++){
        totDia+=mes[i][j];      
    }
    return totDia;
}

//total por mes

function totalM() {
    let totMes = 0;
    for (let i = 0; i < mes.length; i++) {
        for (let j = 0; j < mes[i].length; j++) {
            totMes += mes[i][j];
        }
    }
    return totMes;
}


//dia y semana con mas gastos

function max (){
    let diaMayor = 0;
    let semanaMayor =0; 
    let gastoMayor =mes[0][0];

    for (let i=0; i< mes.length; i++){
        for (let j=0; j< mes[i].length; j++){
            if(mes[i][j] > gastoMayor){
                gastoMayor = mes[i][j];
                diaMayor = j +1;
                semanaMayor = i +1;
            }
        }
    }
    return {i: semanaMayor, j: diaMayor};
}

console.log(`Total de gastos en la semana ${i+1} es de `, totalS(i)); 
console.log(`Total de gastos en el día ${j+1} " es: `, totalD(j)); 
console.log("Total de gastos en el mes:", totalM());

const mayorSemanayDia= max();
console.log("El día con mayor gasto es " + mayorSemanayDia.j );
console.log("La semana con mayor gasto es " + mayorSemanayDia.i);

console.log(mes);