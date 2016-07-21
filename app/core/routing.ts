const routingModule = angular
    .module('app.routing', [])
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
                        controller: (isRecognided, $state) => {
                            'ngInject';

                            $state.go('app.unrecognized');
                        }
                    }
                });


            $urlRouterProvider.when('', '/')
        });

export default routingModule;