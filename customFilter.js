(function(){
    
    angular
        .module('Module',[])
        .filter("upperCase",function(){
            return function(input){
                return input.toUpperCase();
            }
        })
        .filter("firstCaseUpperCase",function(){
            return function(input){
                var mInput = input.substring(0,1).toUpperCase()+input.substring(1)
                return mInput;
            }
        })
        .controller('ControllerCtrl', ["$scope",function($scope){
            $scope.text=""
        }])

    

}());