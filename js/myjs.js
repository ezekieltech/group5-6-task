var calculateSalary = function(firstName, lastName, jobtype, level) {
        this.jobtype = jobtype;
        this.salary = 10000;
        this.transport = 1;
        this.medical = 1;
        this.string='';
        this.level=level;
        this.firstName=firstName;
        this.lastName=lastName;
    };

calculateSalary.prototype.amountFromLevel = function(){

      var theAmount;
       if(this.level === 'Level 1') {
            return  this.salary  + 10000;
          }
          else if (this.level === 'Level 2'){
            return this.salary  + 20000;
          }
          else if (this.level === 'Level 3'){
            theAmount = this.salary  + 30000;
            return theAmount;
          }
          else if (this.level === 'Level 4'){
            theAmount = this.salary  + 40000;
            return theAmount;
          }
       
    };

calculateSalary.prototype.amonoutFromJobType = function(){
  
      var theJobTypeSalary;
       if(this.jobtype === 'Interns') {
            theJobTypeSalary = this.salary  + 90000;
            return theJobTypeSalary;
          }
          else if(this.jobtype === 'Associates'){
            theJobTypeSalary = this.salary  + 140000;
            return theJobTypeSalary;
          }
          else if(this.jobtype === 'Managers'){
            theJobTypeSalary = this.salary  + 190000;
            return theJobTypeSalary;
          }
          else if(this.jobtype === 'Executives'){
            theJobTypeSalary = this.salary  + 230000;
            return theJobTypeSalary;
          }
            else if(this.jobtype === 'Directors'){
            theJobTypeSalary = this.salary  + 280000;
            return theJobTypeSalary;
            }
    };
    
calculateSalary.prototype.InternsSalary = function(){
  
          var arrayOne = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
          var arrayTwo = ['Interns', 'Associates', 'Managers', 'Executives'];
          for (var i=0; i<arrayOne.length+1; ++i){
            if(this.level === arrayOne[i]){
            var firstBonnie = new calculateSalary(arrayTwo[i], arrayOne[i]);
            console.log(firstBonnie.amountFromLevel());
            var jobTypeAmount = firstBonnie.amonoutFromJobType();
            var jobLevelAmount = firstBonnie.amountFromLevel();
            console.log(jobLevelAmount);
            console.log(jobTypeAmount);
            var basicSalary = jobTypeAmount + jobLevelAmount;
            this.transport = this.transport * 0.05 * basicSalary;
            this.medical = this.medical * 0.2 * basicSalary;
            this.string = 'First Name: ' + this.firstName + '; ' + 'Last Name: ' + this.lastName + '; ' +'Basic Salary: ' + basicSalary + '; ' + 'Transport: ' + this.transport + '; Medical: ' + this.medical ;
            return this.string;
            }
          }
          };
