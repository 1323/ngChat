import contactsComponentModule from './contacts';

const componentsModule = angular
    .module('chat.components', [
        contactsComponentModule
    ])
    .name;

export default componentsModule;