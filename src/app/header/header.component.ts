import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
}

/* FROM TEMPLATE
<li class="nav-item dropdown" ngbDropdown>
<a class="nav-link dropdown-toggle" ngbDropdownToggle>
Scout Skills
</a>
<div
class="dropdown-menu"
aria-labelledby="navbarDropdown"
ngbDropdownMenu
>
<a
  class="dropdown-item"
  routerLink="/home"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  >Timberwolf Skills</a
>
<a
  class="dropdown-item"
  routerLink="/master-list"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  >Pathfinder Skills</a
>
<a
  class="dropdown-item"
  routerLink="/home"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  >Rover Skills</a
>
</div>
</li> */
