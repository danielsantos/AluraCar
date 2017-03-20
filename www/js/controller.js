angular.module('starter')
.controller('ListagemController', function($scope) {
	
	$scope.listaDeCarros = [{"nome" : "BMW 120i", "preco" : 70000}];	
	
});


angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope) {
	
	$scope.carroEscolhido = angular.fromJson($stateParams.carro);
	
	$scope.listaDeAcessorios = [{"nome" : "Freio ABS", "preco" : 800},
							    {"nome" : "Ar Condicionado", "preco" : 1000},
							    {"nome" : "MP3 Player", "preco" : 500}];							
								
	
	$scope.mudou = function(acessorio, isMarcado) {
		
		if (isMarcado) {

			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
			
		} else {
			
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
			
		}
		
	};
	
});

/*
'BMW 120i',
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
'Fusca 1500'
*/