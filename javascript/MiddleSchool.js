import { School } from '../javascript/School.js';
import { Level } from '../javascript/School.js';
export class MiddleSchool extends School {
    constructor(name, numberOfStudents, averageTestScores) {
        super(name, Level.middle, numberOfStudents);
        this._averageTestScores = averageTestScores;
    }
    get averageTestScores() {
        if (this._averageTestScores) {
            return this._averageTestScores;
        }
        else {
            console.log('No averageTestScores.');
        }
    }
}
