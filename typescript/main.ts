import {School} from '../javascript/School.js';
import {PrimarySchool} from '../javascript/PrimarySchool.js';
import {MiddleSchool} from '../javascript/MiddleSchool.js';
import {HighSchool} from '../javascript/HighSchool.js';
import {SchoolCatalog} from '../javascript/SchoolCatalog.js';

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const substituteTeachersP = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
School.pickSubstituteTeacher(substituteTeachersP);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportTeams);
const hs = new HighSchool('High School', 315, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'Dodge', 'Soccer']);
console.log(hs.sportTeams);


const ms = new MiddleSchool('Middle School', 365, 95);
console.log(ms.averageTestScores);
const substituteTeachersM = ['J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
School.pickSubstituteTeacher(substituteTeachersM);

const schoolCatalog = new SchoolCatalog();
schoolCatalog.addPrimarySchool(lorraineHansbury);
schoolCatalog.addMiddleSchool(ms);
schoolCatalog.addHighSchool(alSmith);
schoolCatalog.addHighSchool(hs);

console.log(schoolCatalog);
console.log(schoolCatalog.primarySchools);
console.log(schoolCatalog.highSchools);