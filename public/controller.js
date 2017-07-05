(function(){
	var app = angular.module('mainModule',['ngMaterial', 'ngMessages']);
	app.controller('FormCtrl', function($scope, $http){
		$http.get('/api/contacts').then(successCallBack,errorCallBack);
		function successCallBack(response) {
			// console.log("I got data");
			// console.log(response);
		}
		function errorCallBack(error) {
			// console.log("We got an error");
		}

		$scope.addContact = function() {
			$http.post('/api/contacts', $scope.user).then(postSuccess, postError);
			function postSuccess(response) {
				console.log(response);
			}
			function postError(error){
				console.log("we have an error");
			}
		};
	});
})();
