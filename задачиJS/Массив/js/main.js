//создать массив, в цикле заполнить его числами от 0 до 10
function createArray(n){
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(i+1); // если от нуля, то просто i
    }
    
    console.log(array);
    return array;
}	


//создать массив чисел (произвольный), в цикле посчитать сумму всех элементов массива
function calculateAmount(){
	
	var arrayNumbers = [2,45,6,7,8,12,3],
	    arrayLength = arrayNumbers.length,
        sum = arrayNumbers[0];
        
    for(var i=1; i<arrayLength; i++) {
    	sum = sum + arrayNumbers[i];
    }
    
		  
	console.log(sum);
}


//создать массив (произвольно), найти его наибольший элемент (var t = [2,45,6,7,8,12,3])
function findLargestElement(){
	var arrayRandom = [2,45,6,7,8,12,3],
	    arrayLength = arrayRandom.length,
	    most = arrayRandom[0],
	    parentBox =  $('.findLargestElement');
	    
	    
	for(var i=1; i<arrayLength; i++) {
		var a = arrayRandom[i];
		
		if (most<a) {
			most = a;
		}
		
		console.log(most);
		
	}
	
}	    


//создать два масива, объединить их в новый массив (третий), состоящий из элементов обоих массивов
function combineArray(a, b){
	var arrayGeneral = [];
	    
	for(var i=0; i<a.length; i++) {
		arrayGeneral[i] = a[i];
	};
	
	for(var i=0; i<b.length; i++) {
		arrayGeneral.push(b[i]);
	};
	
	
	console.log(arrayGeneral);
	    
}


//создать массив чисел, вывести в консоль квадрат каждого числа
function calculatePowers(array){
    var squares = [],
        tmp;
    for (var i = 0; i < array.length; i++) {
        tmp = array[i];
        // никакой сатаны с длиной, аккуратно добавляем элементы в конец
        squares.push(tmp * tmp);
        // можно еще так squares.push(Math.pow(tmp, 2));
		console.log(squares[i]);
    }
    return squares;
}


    
$(document).ready(function(){
	createArray(10);
	calculateAmount();
	findLargestElement();
	combineArray([24,12,47,31,1], [2,45,6,7,8,12,3]);
	calculatePowers([2,45,6,7,8,12,3]);
})