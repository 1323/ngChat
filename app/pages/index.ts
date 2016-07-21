import chatPageModule from './chat';
import unrecognizedPageModule from './unrecognized';

const pagesModule = angular
    .module('app.pages', [
        chatPageModule,
        unrecognizedPageModule
    ]);

export default pagesModule;