import AppComponent from './app.component';

const appComponentModule = angular
    .module('chat.app', [])
    .component('appComponent', AppComponent);

export default appComponentModule;