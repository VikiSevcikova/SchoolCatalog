export class School{
    private _name: string;
    private _level: Level;
    private _numberOfStudents: number
    constructor(name : string, level : Level, numberOfStudents: number){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        if(this._name){
            return this._name;
        }else{
            console.warn('No name.');
        }
    }

    get level(){
        if(this._level){
            return this._level;
        }else{
            console.warn('No level.');
        }
    }

    get numberOfStudents(){
        if(this._numberOfStudents){
            return this._numberOfStudents;
        }else{
            console.warn('No numberOfStudents.');
        }
    }

    set numberOfStudents(number: number){
        if(number){
            this._numberOfStudents = number;
        }else{
            console.warn('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() : void{
        console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers : string[]) : void{
        if(substituteTeachers){
            let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
            console.log(substituteTeachers[randomNumber]);
        }else{
            console.warn('No substituteTeachers.');
        }
    }
}

export enum Level {
    primary,
    middle,
    high
}