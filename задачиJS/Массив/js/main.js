function fillAnArray(){
	var emptyArray = [];
	emptyArray.length = 10;
	console.log(emptyArray.length);
	for(i=0; i<=9; i++) {
	  emptyArray[i] = (i+1);
	  var valueArray= emptyArray[i],
	      parentBlock =  $('.emptyArray');
	      
	      
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
        parentBox =  $('.calculateAmount');
        
    for(i=1; i<=arrayLength-1; i++) {
    	var sumTotal = sum + arrayNumbers[i];
    	sum = sumTotal;
    	
    }
    
    parentBox.append(function() {
	  	return '<span></span>'
	  })
	  
	 var son = parentBox.find('span:last');
	  son.text(sum);
		  
	console.log(sum);
}

function findLargestElement(){
	var arrayRandom = [2,45,6,7,8,12,3],
	    arrayLength = arrayRandom.length,
	    most = arrayRandom[0],
	    parentBox =  $('.findLargestElement');
	    
	    
	for(i=1; i<=arrayLength-1; i++) {
		var a = arrayRandom[i];
		if (most<a) {
			most = a;
		} else
		{
			most = most;
		}
		console.log(most);
		
	}
	
	
	
	parentBox.append(function() {
	  	return '<span></span>'
	  })
	  
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
	  })
	  
	 var son = parentBox.find('span:last');
	  son.text('[' + arrayGeneral + ']');
}

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
})