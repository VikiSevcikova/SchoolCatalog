import {School} from '../javascript/School.js';
import {Level} from '../javascript/School.js';

export class PrimarySchool extends School{
    private _pickupPolicy : string;

    constructor(name: string, numberOfStudents: number, pickupPolicy: string){
        super(name, Level.primary, numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() : string{
        if(this._pickupPolicy){
            return this._pickupPolicy;
        }else{
            return 'No pickupPolicy.';
        }
    }
}