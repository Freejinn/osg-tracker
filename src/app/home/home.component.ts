import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  scoutGroup = [
    {group: 'Timberwolf',
     url: 'https://docs.guides4guides.org/Timberwolves/Handbook_TWv7_WEB.pdf',
     altSup: '',
     altLink: ''
    },
    {group: 'Pathfinder',
     url: "https://outdoorserviceguides.org/pdf/BPSA-US-Pathfinder-Handbook.pdf",
     altSup: '2022 Updated Proficiency Badges',
     altLink: "https://docs.guides4guides.org/Pathfinders/Pathfinder-Handbook-Preview-June-2022.pdf"
    },
    {group: 'Rover',
     url: "https://outdoorserviceguides.org/pdf/BPSA-US_Rover_Handbook.pdf",
     altSup: 'Rover Badge Supplement',
     altLink: "https://docs.guides4guides.org/Rovers/Rover+Badge+Supplement.pdf"
    },

  ]

  constructor(private router: Router) {}


}
