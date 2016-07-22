const routingModule = angular
    .module('chat.routing', [])
    .config(
        (
            $stateProvider: ng.ui.IStateProvider,
            $locationProvider: ng.ILocationProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider
        ) => {
            'ngInject';

            $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false,
                })
                .hashPrefix('!');

            $stateProvider
                .state('app', {
                    abstract: true
                });

            $urlRouterProvider.when('', '/');
        })
    .name;

export default routingModule;