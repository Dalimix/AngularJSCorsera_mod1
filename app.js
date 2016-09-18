(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.placeHolder = "list comma separated dishes you usually have for lunch";
  $scope.message = "";
  $scope.checkItens = function () {
    var text = $scope.textBoxInput;
    var arrayOfElements = text.split(',');
    arrayOfElements = arrayOfElements.filter(notEmpty);
    console.log(arrayOfElements);
    if(arrayOfElements.length<=3){
        $scope.message = "Enjoy!";
    }
    else{
        $scope.message = "Too much!";
    }
  };

  function notEmpty(elem){
    return elem !="";
  }

}

})();
