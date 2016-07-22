import AppComponent from './app.component';

const appComponentModule = angular
    .module('chat.app', [])
    .component('appComponent', AppComponent)
    .name;

export default appComponentModule;