export interface SkillParent {
  id: string;
  label: string;
  skills: SkillBadge[];
  listColor: string;
}

export interface SkillBadge {
  id: string;
  imgPath: string;
  name: string;
  parts: SkillPart[];
  progressPercentage: number;
}

export interface SkillPart {
  label: string;
  description: string;
  selected: boolean;
}
