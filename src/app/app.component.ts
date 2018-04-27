import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyAWO_2AAq_BHO7XOD8vq6I2E6PYFLpO_Es",
      authDomain: "bibliotheque-35aa2.firebaseapp.com",
      databaseURL: "https://bibliotheque-35aa2.firebaseio.com",
      projectId: "bibliotheque-35aa2",
      storageBucket: "bibliotheque-35aa2.appspot.com",
      messagingSenderId: "1002583526266"
    };
    firebase.initializeApp(config);
  }
}
