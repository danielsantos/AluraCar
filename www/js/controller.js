angular.module('starter')
.controller('ListagemController', function($scope, CarroService) {

	CarroService.obterCarros().then( function (dados) {

		$scope.listaDeCarros = dados;

	});

	/*
	$scope.listaDeCarros = [{"nome" : "BMW 120i", "preco" : 70000},
							{"nome" : "Onix 1.6" , "preco" : 35000},
                            {"nome" : "Fiesta 2.0", "preco" : 52000},
                            {"nome" : "C3 1.0", "preco" : 22000},
                            {"nome" : "Uno Fire", "preco" : 11000},
                            {"nome" : "Sentra 2.0", "preco" : 53000},
                            {"nome" : "Astra Sedan", "preco" : 39000},
                            {"nome" : "Vectra 2.0 Turbo", "preco" : 37000},
                            {"nome" : "Hilux 4x4", "preco" : 90000},
                            {"nome" : "Montana Cabine dupla", "preco" : 57000},
                            {"nome" : "Outlander 2.4" ,"preco" : 99000},
                            {"nome" : "Fusca 1500", "preco" : 6000}];
	*/

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

angular.module('starter')
.controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state, CarroService) {

	$scope.carroFinalizado = angular.fromJson($stateParams.carro);

	$scope.pedido = {};

	$scope.finalizarPedido = function() {

		var pedidoFinalizado = {
			params : {
				carro    : $scope.carroFinalizado.carro,
				preco    : $scope.carroFinalizado.preco,
				nome     : $scope.pedido.nome,
				endereco : $scope.pedido.endereco,
				email    : $scope.pedido.email,
			}
		}

		CarroService.salvarPedido(pedidoFinalizado).then(function(dados) {

			$ionicPopup.alert({

				title: 'Parabens',
				template: 'Voce acaba de comprar um carro'

			}).then(function() {
				$state.go('app.listagem');
			});


		}, function(erro) {

			$ionicPopup.alert({

				title: 'Deu erro',
				template: 'Campos Obrigatorios'

			});

		});

	};

});

angular.module('starter')
.controller('LoginController', function($scope, CarroService, $ionicPopup, $state, $rootScope) {

	$scope.login = {};

	$scope.realizarLogin = function() {

		var dadosDoLogin = {

			params : {

				email : $scope.login.email,
				senha : $scope.login.senha

			}

		}

		CarroService.realizarLogin(dadosDoLogin).then(function(dados) {

			$rootScope.usuario = dados.usuario;
		
			$state.go('app.listagem');

		}, function(erro) {

			$ionicPopup.alert({

				title: 'Opa!',
				template: 'Email ou Senha incorretos'

			});

		});

	};

});

angular.module('starter')
.controller('MenuController', function($rootScope, $scope) {
	
	$scope.usuarioLogado = $rootScope.usuario;
	
});

angular.module('starter')
.controller('PerfilController', function($rootScope, $scope) {
	
	$scope.usuarioLogado = $rootScope.usuario;
	
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
