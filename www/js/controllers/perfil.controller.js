angular.module('starter')
.controller('PerfilController', function($rootScope, $scope) {
	
	$scope.estaEditanto = false;
	$scope.textoBotao = 'Editar';
	
	$scope.usuarioLogado = $rootScope.usuario;
	
	$scope.acaoBotao = function() {
		
		if ($scope.estaEditanto) {
			
		  $scope.estaEditanto = false;
		  $scope.textoBotao = 'Editar';
		  
		} else {
		  
		  $scope.estaEditanto = true;
		  $scope.textoBotao = 'Salvar';
		  
		  
		}
		
	}
	
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