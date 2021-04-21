import { School } from '../javascript/School.js';
import { Level } from '../javascript/School.js';

export class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, Level.primary, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        if (this._pickupPolicy) {
            return this._pickupPolicy;
        }
        else {
            return 'No pickupPolicy.';
        }
    }
}
