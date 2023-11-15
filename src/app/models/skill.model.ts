export interface SkillParent {
    id: number;
    label: string;
    listColor: string;
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