export class Skill{
    public name : string;
    public rating : number;
    public skillType : string;
    
    constructor(name : string, rating : number,type : string){
        this.name = name;
        this.rating = rating;
        this.skillType = type;
    }    
}