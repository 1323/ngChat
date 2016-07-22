angular.module('chat.routing')
    .config(($stateProvider: angular.ui.IStateProvider) => {
        'ngInject';

        $stateProvider.state('app.unrecognized', {
            url: '/',
            views: {
                'main@': {
                    template: '<unrecognized-page></unrecognized-page>'
                }
            }
        });
    });
