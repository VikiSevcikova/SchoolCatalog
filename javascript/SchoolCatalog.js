export class SchoolCatalog {
    constructor() {
        this._primarySchools = [];
        this._middleSchools = [];
        this._highSchools = [];
    }
    get primarySchools() {
        return this._primarySchools;
    }
    get middleSchools() {
        return this._middleSchools;
    }
    get highSchools() {
        return this._highSchools;
    }
    addPrimarySchool(primarySchool) {
        if (primarySchool) {
            this._primarySchools.push(primarySchool);
        }
    }
    addMiddleSchool(middleSchool) {
        if (middleSchool) {
            this._middleSchools.push(middleSchool);
        }
    }
    addHighSchool(highSchool) {
        if (highSchool) {
            this._highSchools.push(highSchool);
        }
    }
}
