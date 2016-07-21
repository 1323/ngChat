import * as uiRouter from 'angular-ui-router';

import componentsModule from './components';
import pagesModule from './pages';
import routingModule from './core/routing';

angular
    .module('chat', [
        uiRouter,
        routingModule,
        componentsModule,
        pagesModule
    ]);