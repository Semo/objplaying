export interface TwoTypedMessageInterface {

    id: string;
    person_surname: string;
    person_lastname: string

}

export class TwoTypedMessage implements TwoTypedMessageInterface {
    id: string;
    person_surname: string;
    person_lastname: string;

    constructor(id: string, person_surname: string, person_lastname:string) {
        this.id = id;
        this.person_surname = person_surname;
        this.person_lastname = person_lastname;
    }

}