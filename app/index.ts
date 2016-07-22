import routingModule from './core/routing';
import componentsModule from './components';
import pagesModule from './pages';
import appComponentModule from './core';

angular
    .module('chat', [
        'ui.router',
        'ngMaterial',
        routingModule,
        appComponentModule,
        componentsModule,
        pagesModule
    ])
    .config(($mdThemingProvider: ng.material.IThemingProvider) => {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('light-blue')
            .accentPalette('grey')
            .warnPalette('red');
    });
