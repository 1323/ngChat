import contactsComponent from './contacts.component';

const contactsComponentModule = angular
    .module('app.components.contacts', [])
    .component('contactsComponent', contactsComponent)
    .name;

export default contactsComponentModule;