import chatPageComponent from './chat.component';
import './chat.route';

const chatPageModule = angular
    .module('chat.pages.chat', [])
    .component('chatPage', chatPageComponent)
    .name;

export default chatPageModule;