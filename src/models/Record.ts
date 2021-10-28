// External Dependencies
import {ObjectId} from "mongodb"


// Class Implementation
export default class Record {
    constructor(public name:string, public id?:ObjectId) {}
}
