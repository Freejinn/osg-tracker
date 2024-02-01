import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../reducers';
import { Observable, pipe } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';
import { logout } from '../auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  scoutGroup = [
    {group: 'Timberwolf',
     url: 'https://docs.guides4guides.org/Timberwolves/Handbook_TWv7_WEB.pdf',
     altSup: '',
     altLink: '',
     route: '/home',
     color: 'goldenrod'
    },
    {group: 'Pathfinder',
     url: "https://docs.guides4guides.org/Pathfinders/OSG+Pathfinder+Handbook.pdf",
     altSup: '2022 Proficiency Badges',
     altLink: "https://docs.guides4guides.org/Pathfinders/Pathfinder-Handbook-Preview-June-2022.pdf",
     route: '/master-list',
     color: '#416aed'
    
    },
    {group: 'Rover',
     url: "https://outdoorserviceguides.org/pdf/BPSA-US_Rover_Handbook.pdf",
     altSup: 'Rover Badge Supplement',
     altLink: "https://docs.guides4guides.org/Rovers/Rover+Badge+Supplement.pdf",
     route: '/home',
      color: 'rgb(35, 58, 42)'
    },

  ]

  isLoggedIn$:Observable<boolean>;
  isLoggedOut$:Observable<boolean>;

  constructor(private route: Router, 
    private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
    .pipe(select(isLoggedIn))
    
    this.isLoggedOut$ = this.store
    .pipe(select(isLoggedOut))
  }

  logout() {
    this.store.dispatch(logout());
    this.route.navigateByUrl('/home');
  }

}
