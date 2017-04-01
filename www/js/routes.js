angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('login');

	$stateProvider

	.state('app', {
		url : '/app',
		templateUrl : 'templates/menu.html',
		abstract : true
	})

	.state('app.listagem', {
		url : '/listagem',
		views : {
				'menuContent' : {
						templateUrl : 'templates/listagem.html',
						controller : 'ListagemController'
				}
		}
	})

	.state('carroescolhido', {
		url : '/carroescolhido/:carro',
		templateUrl : 'templates/carroEscolhido.html',
		controller : 'CarroEscolhidoController'
	})

	.state('finalizarpedido', {
		url : '/finalizarpedido/:carro',
		templateUrl : 'templates/finalizarPedido.html',
		controller : 'FinalizarPedidoController'
	})

	.state('login', {
		url : '/login',
		templateUrl : 'templates/login.html',
		controller : 'LoginController'
	});


});
