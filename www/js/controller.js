angular.module('starter')
.controller('ListagemController', function($scope) {
	
	$scope.listaDeCarros = ['BMW 120i',
	        'Onix 1.6',
			'Fiesta 2.0',
			'C3 1.0',
			'Uno Fire',
			'Sentra 2.0',
			'Astra Sedan',
			'Vectra 2.0 Turbo',
			'Hilux 4x4',
			'Montana Cabine Dupla',
			'Outlander 2.4',
			'Fusca 1500'];	
	
});


angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope) {
	
	$scope.carroEscolhido = $stateParams.carro;
	
});