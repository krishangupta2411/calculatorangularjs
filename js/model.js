function divide(equation){
					console.log("Divide Call");
                    var eqnArr = equation.split('/');      
                    /*console.log(eqnArr);*/
                    var divide = eqnArr[0]*1;
                    for(var j=1 ;j< eqnArr.length;j++)
                        {
                            divide=divide/(eqnArr[j]*1);
                        }
                    /*console.log("returning result by divide : "+divide);*/
					return divide;
				}
function multiply(equation){
                    var mul =1;
					console.log("Multiply Call");
                    var eqnArr = equation.split('*');
                    /*console.log(eqnArr);*/
                    var mulArr = [];
                    for(var i=0; i<eqnArr.length;i++)
                        {
                            mulArr[i]=divide(eqnArr[i]);
                        }
                    
                    for(var j=0 ;j< mulArr.length;j++)
                        {
                            mul=mul*mulArr[j];
                        }
                    /*console.log("returning result by multiply : "+mul);*/
					return mul;
				}
function subtract(equation){
					console.log("Subtract Call");
                    
                    var eqnArr = equation.split('-');
                    /*console.log(eqnArr);*/
                    var subArr = [];
                    for(var i=0; i<eqnArr.length;i++)
                        {
                            subArr[i]=multiply(eqnArr[i]);
                        }
                    /*console.log("result obtained from multiply : "+subArr);*/
                    var sub = subArr[0];
                   /* console.log("value of 1st element in array : "+sub);*/
                    for(var j=1 ;j< subArr.length;j++)
                        {   
                           /* console.log("printing current element : "+subArr[j]);
                            console.log("current value of sub : "+sub);*/
                            sub=sub-subArr[j];
                           /* console.log("new value of sub : "+sub);*/
                        }
                   /* console.log("returning result by subtract : "+sub);*/
					return sub;
				}
function add(equation)
                {
                    var sum =0;
					console.log("Add Call");
                    var eqnArr = equation.toString().split('+');
                    /*console.log(eqnArr);*/
                    var sumArr = [];
                    for(var i=0; i<eqnArr.length;i++)
                        {
                            sumArr[i]=subtract(eqnArr[i]);
                        }
                    
                    for(var j=0; j<sumArr.length;j++)
                        {
                            sum = sum+sumArr[j];
                        }
                    /*console.log("returning result by add : "+sum);*/
					return sum;
				}
app.factory("myfactory", ()=>{
			console.log("Calculator Factory Called");
			var object = {
                calculate(equation)
                {
                    console.log("calculate called");
                    var result=0;
                    if(equation.length==1&&equation.startsWith('0'))
                    {
                        result = 0;
                    }
                    else
                        {
                        result = add(equation);
                        }
                    /*console.log("returning result : "+result);*/
                    return result;
                },
                
				add(equation)
                {
                    var sum =0;
					console.log("Add Call");
                    var eqnArr = equation.split('+');
                    console.log(eqnArr);
                    var sumArr = [];
                    for(var i=0; i<eqnArr.length;i++)
                        {
                            sumArr[i]=subtract(eqnArr[i]);
                        }
                    
                    for(var j=0; j<sumArr.length;j++)
                        {
                            sum = sum+sumArr[j];
                        }
					return sum;
				},
                
                subtract(equation){
					console.log("Subtract Call");
                    
                    var eqnArr = equation.split('-');
                    var subArr = [];
                    for(var i=0; i<eqnArr.length;i++)
                        {
                            subArr[i]=multiply(eqnArr[i]);
                        }
                    var sub = subArr[0];
                    for(var j=1 ;j< subArr.length;j++)
                        {
                            sub=sub-subArr[j];
                        }
					return sub;
				},
                multiply(equation){
                    var mul =1;
					console.log("Multiply Call");
                    var eqnArr = equation.split('*');
                    var mulArr = [];
                    for(var i=0; i<eqnArr.length;i++)
                        {
                            mulArr[i]=divide(eqnArr[i]);
                        }
                    
                    for(var j=0 ;j< mulArr.length;j++)
                        {
                            mul=mul*mulArr[j];
                        }
					return mul;
				},
                divide(equation){
					console.log("Divide Call");
                    var eqnArr = equation.split('/');                 
                    var divide = eqnArr[0]*1;
                    for(var j=1 ;j< eqnArr.length;j++)
                        {
                            divide=divide/(eqnArr[j]*1);
                        }
					return divide;
				},
                /*modulus(first,second){
					console.log("Remainder Call");
					return first%second;
				}
				*/
			}
			return object;
		});