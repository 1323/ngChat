import chatPageModule from './chat';
import unrecognizedPageModule from './unrecognized';

const pagesModule = angular
    .module('chat.pages', [
        chatPageModule,
        unrecognizedPageModule
    ])
    .name;

export default pagesModule;