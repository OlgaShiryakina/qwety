function fillAnArray(){
	var emptyArray = [];

    // не делай так.
	emptyArray.length = 10;
    сonsole.log(emptyArray.length);


	// было так
	// for(i=0; i<=9; i++) {
    // переменная, объявленная без var становится глобальной и попадает в window, так нельзя
	for(var i=0; i<=9; i++) {
        // шойта вообще?
	  emptyArray[i] = (i+1);
	  var valueArray= emptyArray[i],
      // на каждом проходе брать jQuery выборку по классу - это страшно дорого
	      parentBlock =  $('.emptyArray');
	      
	  // шойта? ну если хочешь ты вывести результат, сделай это красиво
      // зачем искать через find элемент, который только что был создан, если можно сразу взять ссылку на него
      // var t = $('<span>');
      // t.text(valueArray);
      // parentBlock.append(t);
      // а вообще не трогай HTML, мы его не рассматриваем сейчас


	  parentBlock.append(function() {
	  	return '<span></span>'
	  })
	  var son = parentBlock.find('span:last');
	  son.text(valueArray);
	}
	
	console.log(emptyArray);
}	
	
function calculateAmount(){	
	var arrayNumbers = [2,45,6,7,8,12,3],
	    arrayLength = arrayNumbers.length,
        sum = arrayNumbers[0],
    // а вот здесь уже кешируем выборку по классу, немного легче стало
        parentBox =  $('.calculateAmount');
    // то же самое про var
    // вместо i<=arrayLength-1 достаточно написать i<arrayLength, ощути разницу
    for(i=1; i<=arrayLength-1; i++) {
        // зачем лишняя переменная? достаточно вот так
        // sum = sum + arrayNumbers[i];
        // или так
        // sum += arrayNumbers[i];
    	var sumTotal = sum + arrayNumbers[i];
    	sum = sumTotal;
    	
    }
    // та же сатана про создание\поиск элемента
    parentBox.append(function() {
	  	return '<span></span>'
	  });
	  
	 var son = parentBox.find('span:last');
	  son.text(sum);
		  
	console.log(sum);
}

function findLargestElement(){
	var arrayRandom = [2,45,6,7,8,12,3],
	    arrayLength = arrayRandom.length,
	    most = arrayRandom[0],
	    parentBox =  $('.findLargestElement');
	    
	// var
	for(i=1; i<=arrayLength-1; i++) {
		var a = arrayRandom[i];
		if (most<a) {
			most = a;
		}
        // зачем вообще этот else? most иначе сам изменится, что ли?
        else
		{
			most = most;
		}
		console.log(most);
		
	}
	
	
	// сотона из предыдущих серий
	parentBox.append(function() {
	  	return '<span></span>'
	  });
	  
	 var son = parentBox.find('span:last');
	  son.text(most);
}	    

function combinedIntoOne(){
	var arrayFirst = [24,12,47,31,1],
	    arraySecond = [2,45,6,7,8,12,3],
	    arrayGeneral = arrayFirst.concat(arraySecond);
	    
	    console.log(arrayGeneral);
	    
	    
	    
	var parentBox =  $('.combinedIntoOne');   
	parentBox.append(function() {
	  	return '<span></span>'
	  });
	  
	 var son = parentBox.find('span:last');
	  son.text('[' + arrayGeneral + ']');
}


// SquareRoot - квадратный корень, так что название не пойдет
// используй переводчик
function calculateSquareRoot(){
	var arrayInitial = [2,45,6,7,8,12,3],
	    arrayLength = arrayInitial.length;
	
	for(i=0; i<=arrayLength-1; i++) {
		var a = arrayInitial[i],
		    b = a * a;
		
		console.log(b);
		
		
	}
	  
}

$(document).ready(function(){
	fillAnArray();
	calculateAmount();
	findLargestElement();
	combinedIntoOne();
	calculateSquareRoot();
});


// вообще, если ты пишешь функции, подразумевается, что их можно как-то использовать
// у тебя это невозможно, т.к. все данные находятся внутри функции и нигде их потом получить нельзя
// правильное использование функции - вот:

function calculatePowers(array){
    var squares = [],
        tmp;
    for (var i = 0; i < array.length; i++) {
        tmp = array[i];
        // никакой сатаны с длиной, аккуратно добавляем элементы в конец
        squares.push(tmp * tmp);
        // можно еще так squares.push(Math.pow(tmp, 2));

    }
    return squares;
}
// теперь можно использовать функцию

var result = calculatePowers([1,2,3]);
console.log(result);

// и решение первой задачи для примера

function createArray(n){
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(i+1); // если от нуля, то просто i
    }
    return array;
}

// запускаем

var newArray = createArray(10); // используем параметр для задания размера, т.к. наша функция может работать с любым размером
console.log(newArray);

// в целом - задачи формально выполнены, но смотреть больно.
// выводы:
// 1) читать про массивы, читать про Math
// 2) не делать рассчеты и создание html в одной функции
// 3) использовать функции правильно - параметры, возвращаемые значения
// 4) переписать задачу про объединение массивов с concat - сделать обычными циклами, это задача на понимание
