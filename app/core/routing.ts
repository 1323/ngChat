const routingModule = angular
    .module('chat.routing', [])
    .config(
        (
            $stateProvider: angular.ui.IStateProvider,
            $locationProvider: angular.ILocationProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider
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
                    abstract: true,
                    resolve: {
                        isRecognided: () => {
                            return false;
                        },
                        controller: (isRecognided: boolean, $state: ng.ui.IStateService) => {
                            'ngInject';

                            $state.go('app.unrecognized');
                        }
                    }
                });

            $urlRouterProvider.when('', '/')
        })
    .name;

export default routingModule;