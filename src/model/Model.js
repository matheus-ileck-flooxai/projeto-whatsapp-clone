import { ClasseEvent } from "../util/ClassEvent";

export class Model extends ClasseEvent{

    
    constructor() {
        super();
        this._data = {};
    }

    FromJSON(json){

        this._data = Object.assign(this._data, json);

        this.trigger('datachange', this.toJSON())

    }

    toJSON(){

        return this._data;

    }

}