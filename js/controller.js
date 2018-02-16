//app.controller("calculatorctrl", ($scope,myfactory,$rootScope)=>{

app.directive('keypressEvents',

function ($document, $rootScope) 
{
    return {
        restrict: 'A',
        link: function () {
            console.log('linked');
            $document.bind('keypress', function (e)
            {   
             /*   console.log(e.which);
                console.log(e);*/
                if(e.which===13)
               {
                   console.log("enter pressed");
                    $rootScope.$broadcast('enterpress', e, String.fromCharCode(e.which));
               }
                else 
                {
                $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
                }
            });
            
             $document.bind('keydown', function (e)
            {   
                /*console.log(e.which);
                console.log(e);*/
                if(e.which===8||e.which===46||e.which==8||e.which==46){
                    console.log("delete pressed");
                    $rootScope.$broadcast('deletepress', e, String.fromCharCode(e.which));
                }
            });
        }
    }
});

app.controller("calculatorctrl", ($scope,myfactory, $rootScope)=>{    
		console.log("Calculator Controller Called....");
        $scope.equation='0';
        //$scope.key = 'none'
        
        $rootScope.$on('deletepress', function (evt, obj, key) {
            $scope.$apply(function () 
            {
                
                //console.log(key.toString());
                key=key.trim();
                $scope.delete();
            }); 
        });
    
        $rootScope.$on('enterpress', function (evt, obj, key) {
            $scope.$apply(function () 
            {
               
                //console.log(key.toString());
                key=key.trim();
                $scope.compute();
            }); 
        });
        //console.log('dichak-dichak');
        $rootScope.$on('keypress', function (evt, obj, key) {
            $scope.$apply(function () 
            {
                $scope.key = key;
                console.log(key.toString());
                key=key.trim();
                if(key>=0&&key<=9||key=='/'||key=='*'||key=='-'||key=='+'||key==".")
                {    
                    //console.log("called");
                    $scope.updateEquation(key);
                }
                else if(key===8||key===46)
                    {
                        console.log("delete key pressed");
                        $scope.delete();
                    }
            }); 
        });

		$scope.compute=()=>
        {
			console.log("Compute Call");
			var output = myfactory.calculate($scope.equation);
			$scope.equation= output;
            console.log(output);
			
		}
        $scope.clearAll=()=>
        {
            console.log("ClearAll Call");
            $scope.equation='0';
        }
        $scope.delete=()=>
        {
            console.log("Delete Call");
            var temp = $scope.equation;
            var abcd = temp.toString();
            var edited =abcd.slice(0,(abcd.length-1));
            $scope.equation=edited;
            if(edited.length==0)
                $scope.equation='0';
        }
            
        $scope.updateEquation=(char)=>
        {
            var tempEqn =$scope.equation.toString();
            //if(char.)
            if(tempEqn.startsWith("0")&&tempEqn.length==1)
                {
                    //console.log(char);
                    $scope.equation=char;
                }
            else
            {
                //console.log(typeof(tempEqn));
                tempEqn=tempEqn + char;
                $scope.equation=tempEqn;
                
            }
        }
	});