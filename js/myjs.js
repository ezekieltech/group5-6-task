(function(){
    var level = document.getElementById('#results').value;
    console.log(level);
})();

 let employee = (rank) => {
        let baseSalary;
        let feedingAllowance;
        let healthAllowance;
        let transportAllowance;
        let wardrobeAllowance;
        let salaryDetails
        
 		if (rank === 'Interns'){
 			baseSalary = 2000;
 			transportAllowance = 200;
            
            
            salarySum = baseSalary + transportAllowance;
    		} 
 		else if (rank === 'Associates'){
 			baseSalary = 3200;
 			transportAllowance = 300;
 			salarySum = baseSalary + transportAllowance;
 			
 		}
 		else if (rank === 'Managers'){
 			baseSalary = 3300;
 			feedingAllowance = 400;
 			transportAllowance = 250;
 			salarySum = baseSalary + feedingAllowance + transportAllowance;
 			
 		}
 		else if (rank === 'Executives'){
 			baseSalary = 3900;
 			feedingAllowance = 500;
 			healthAllowance = 600;
 			transportAllowance = 200;

 			salarySum = baseSalary + feedingAllowance + healthAllowance + transportAllowance;
     
      		}
 		else if (rank === 'Directors'){
 			baseSalary = 4500;
 			feedingAllowance = 600;
 			healthAllowance = 600;
 			transportAllowance = 300;
 			salarySum = baseSalary + feedingAllowance + healthAllowance + transportAllowance;
 			
 		} 
 		return salarySum;- 
        
    }






// document.ready(var inputElement = document.createElement('input');
// inputElement.type = "button"
// inputElement.addEventListener('click', function(){
//     employee();
// });

// ​document.body.form.appendChild(inputElement);​
// )();
// // console.log(employee('Directors'));
//    

// var result = {name: 'hello'};
// function gotoNode(name) {
//     alert(name);

// }

// function a1_onclick(id) {
//         document.getElementById(id).style.backgroundColor = "#F00";   
//     }
