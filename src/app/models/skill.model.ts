// export class Skill {
//     constructor(public imgPath: string, public name: string, public description: object) {}
// }

export class Skill {
    public imgPath: string;
    public name: string;
    public description: object;
    

    constructor(imgPath: string, name: string, desc: object) {
        this.imgPath = imgPath;
        this.name = name;
        this.description = desc;
    }
}

