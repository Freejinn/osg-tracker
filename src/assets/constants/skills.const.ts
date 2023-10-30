import {SkillParent} from "../../app/models/skill.model";

export const skillsConst: SkillParent[] = [
  {
    id: '1',
    label: 'Comprehensive Skill Set',
    listColor: '',
    skills: [
      {
        id: '1',
        imgPath: '',
        name: 'Tenderfoot',
        progressPercentage: 0,
        parts: [
          {
            label: '',
            description: '',
            selected: false,
          }
        ]
      }
    ],
  },
  {
    label: 'Outdoor Skills',
    id: '2',
    listColor: '',
    skills: [
      {
        id: '1',
        imgPath: '',
        name: 'Angler',
        progressPercentage: 0,
        parts: [
          {
            label: '',
            description: '',
            selected: false,
          }
        ]
      }
    ],
  }
]
