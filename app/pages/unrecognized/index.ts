import unrecognizedPageComponent from './unrecognized.component';
import './unrecognized.route';

const unrecognizedPageModule = angular
    .module('chat.pages.unrecognized', [])
    .component('unrecognizedPage', unrecognizedPageComponent)
    .name;

export default unrecognizedPageModule;