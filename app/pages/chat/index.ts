import chatPageComponent from './chat.component';

const chatPageModule = angular
    .module('app.pages.chat', [])
    .component('chatPage', chatPageComponent)
    .name;

export default chatPageModule;