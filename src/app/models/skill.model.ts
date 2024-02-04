// export interface SkillRank {
//     id: number;
//     label: string;
//     backgroundColor: string;
//     skillGroups: SkillParent[];
// }

export interface SkillParent {
    id: number;
    label: string;
    backgroundColor: string;
    skills: SkillBadge[];

}

export interface SkillBadge {
    id: number;
    imgPath: string;
    label: string;
    progressPercentage: number;
    parts: SkillParts[];

}

export interface SkillParts {
    label: string;
    descrip: string;
    selected: boolean;
}