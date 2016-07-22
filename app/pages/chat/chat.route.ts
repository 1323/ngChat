angular.module('chat.routing')
    .config(($stateProvider: ng.ui.IStateProvider) => {
        'ngInject';

        $stateProvider.state('app.chat', {
            url: '/chat',
            views: {
                'main@': {
                    template: '<chat-page></chat-page>'
                }
            }
        });
    });