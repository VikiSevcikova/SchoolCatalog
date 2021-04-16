import {School} from '../javascript/School.js';
import {Level} from '../javascript/School.js';

export class MiddleSchool extends School{
    private _averageTestScores : number;

    constructor(name: string, numberOfStudents: number, averageTestScores: number){
        super(name, Level.middle, numberOfStudents);
        this._averageTestScores = averageTestScores;
    }

    get averageTestScores() : number{
        if(this._averageTestScores){
            return this._averageTestScores;
        }else{
            console.log('No averageTestScores.');
        }
    }
}