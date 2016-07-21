import componentsModule from './components';
import pagesModule from './pages';
import routingModule from './core/routing';

angular
    .module('chat', [
        'ui-router',
        routingModule,
        componentsModule,
        pagesModule
    ]);