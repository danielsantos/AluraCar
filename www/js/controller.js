angular.module('starter')
.controller('ListagemController', function($scope) {
	
	$scope.listaDeCarros = [{"nome" : "BMW 120i", "preco" : 70000}];	
	
});


angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope) {
	
	$scope.carroEscolhido = angular.fromJson($stateParams.carro);
	
});