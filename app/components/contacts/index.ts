import contactsComponent from './contacts.component';

const contactsComponentModule = angular
    .module('chat.components.contacts', [])
    .component('contactsComponent', contactsComponent)
    .name;

export default contactsComponentModule;