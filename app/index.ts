import routingModule from './core/routing';
import componentsModule from './components';
import pagesModule from './pages';

angular
    .module('chat', [
        'ui.router',
        routingModule,
        componentsModule,
        pagesModule
    ]);