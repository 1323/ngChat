import routingModule from './core/routing';
import componentsModule from './components';
import pagesModule from './pages';
import appComponentModule from './core';

angular
    .module('chat', [
        'ui.router',
        routingModule,
        appComponentModule,
        componentsModule,
        pagesModule
    ]);
