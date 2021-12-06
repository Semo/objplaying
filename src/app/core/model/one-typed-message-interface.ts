import { Point } from "geojson";

export interface OneTypedMessageInterface {

    id: string;
    poi_info: string;
    geoloc: Point;
    dattime: Date;

}

export class OneTypedMessage implements OneTypedMessageInterface {
    id: string;
    poi_info: string;
    geoloc: Point;
    dattime: Date;

    constructor (id: string, poi_info:string, geoloc: Point, dattime: Date) {
        this.id = id;
        this.poi_info = poi_info;
        this.geoloc = geoloc;
        this.dattime = dattime;
    }
    
}