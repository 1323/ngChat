import {Component} from './annotations';

@Component({
    template: require('./app.html')
})
export default class AppComponent {
    $onInit() {
        console.log('App is ready!');
    }
}