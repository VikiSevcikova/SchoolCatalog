import {School} from '../javascript/School.js';
import {Level} from '../javascript/School.js';

export class HighSchool extends School{
    private _sportTeams : string[];

    constructor(name: string, numberOfStudents: number, sportTeams: string[]){
        super(name, Level.high, numberOfStudents);
        this._sportTeams = sportTeams;
    }

    get sportTeams(){
        if(this._sportTeams){
            return this._sportTeams.join(', ');
        }else{
            return 'No sportTeams.';
        }
    }
}