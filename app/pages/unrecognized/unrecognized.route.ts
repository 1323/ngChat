angular.module('app.routing')
    .config(($stateProvider: angular.ui.IStateProvider) => {
        'ngInject';

        $stateProvider.state('app.unrecognized', {
            url: '/unrecognized',
            views: {
                'main@': {
                    template: '<unrecognized-page></unrecognized-page>'
                }
            }
        });
    });
