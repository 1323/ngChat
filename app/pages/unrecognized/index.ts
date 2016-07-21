import unrecognizedPageComponent from './unrecognized.component';

const unrecognizedPageModule = angular
    .module('app.pages.unrecognized', [])
    .component('unrecognizedPage', unrecognizedPageComponent)
    .name;

export default unrecognizedPageModule;