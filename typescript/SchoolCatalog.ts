import {PrimarySchool} from './PrimarySchool.js';
import {MiddleSchool} from './MiddleSchool.js';
import {HighSchool} from './HighSchool.js';

export class SchoolCatalog{
    private _primarySchools : PrimarySchool[] = [];
    private _middleSchools : MiddleSchool[] = [];
    private _highSchools : HighSchool[] = [];

    constructor(){}

    get primarySchools(){
        return this._primarySchools;
    } 

    get middleSchools(){
        return this._middleSchools;
    }

    get highSchools(){
        return this._highSchools;
    }

    addPrimarySchool(primarySchool : PrimarySchool){
        if(primarySchool){
            this._primarySchools.push(primarySchool);
        }
    }

    addMiddleSchool(middleSchool : MiddleSchool){
        if(middleSchool){
            this._middleSchools.push(middleSchool);
        }
    }
    
    addHighSchool(highSchool : HighSchool){
        if(highSchool){
            this._highSchools.push(highSchool);
        }
    }
}