import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { isLoggedIn, isLoggedOut } from '../auth/auth.selectors';
import { logout } from '../auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$:Observable<boolean>;
  isLoggedOut$:Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
    .pipe(select(isLoggedIn));

    this.isLoggedOut$ = this.store
    .pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(logout());
    this.route.navigateByUrl('/home');
  }
}

// FROM TEMPLATE
// <li class="nav-item dropdown" ngbDropdown>
//           <a class="nav-link dropdown-toggle" ngbDropdownToggle>
//           Scout Skills
//           </a>
//           <div
//           class="dropdown-menu"
//           aria-labelledby="navbarDropdown"
//           ngbDropdownMenu
//           >
//           <a
//             class="dropdown-item"
//             routerLink="/home"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             >Timberwolf Skills</a
//           >
//           <a
//             class="dropdown-item"
//             routerLink="/master-list"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             >Pathfinder Skills</a
//           >
//           <a
//             class="dropdown-item"
//             routerLink="/home"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             >Rover Skills</a
//           >
//           </div>
//           </li> 
