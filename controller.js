(function(){
	var app = angular.module('mainModule',['ngMaterial', 'ngMessages']);
	app.controller('FormCtrl', function($scope, $http){
		$http.get('/stereobasecontacts').then(successCallBack,errorCallBack);
		function successCallBack(response) {
			// console.log("I got data");
			// console.log(response);
		}
		function errorCallBack(error) {
			// console.log("We got an error");
		}

		$scope.addContact = function() {
			// console.log($scope.user);
			$http.post('stereobasecontacts', $scope.user).then(postSuccess, postError);
			function postSuccess(response) {
				console.log(response);
			}
			function postError(error){
				// console.log(error);
				// console.log("we have an error");
			}
			// console.log("Submit works");
			// $http.post('stereobasecontacts', $scope.user)
			// console.log($scope.user);
		};
		// console.log($scope.user);
	});
})();
