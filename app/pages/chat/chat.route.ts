angular.module('app.routing')
    .config(($stateProvider: angular.ui.IStateProvider) => {
        'ngInject';

        $stateProvider.state('app.chat', {
            url: '/',
            views: {
                'main@': {
                    template: '<chat-page></chat-page>'
                }
            }
        });
    });