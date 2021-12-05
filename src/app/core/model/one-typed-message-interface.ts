import { Point } from "geojson";

export interface OneTypedMessageInterface {

    id: string;
    poi_info: string;
    geoloc: Point;
    dattime: Date;

}
