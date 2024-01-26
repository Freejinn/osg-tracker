import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { login } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'osg-tracker';

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    const userProfile = localStorage.getItem("user");
    //this is so we can populate the local store with 
    //data from local storage when the browser is refreshed.
    //This is here in the app module becaues we want this to 
    //happen as soon as possible.

    if(userProfile) {
      this.store.dispatch(login({user: JSON.parse(userProfile)}));
    }
    //this condition creates another dispatch (action) which will 
    //ensure that if there is data in local storage, per above, 
    //then we will populate the stoare with the info.

  }

  
}
