import { AlertType } from "../enums/alert.enum";

export class Alert {
    data: any;
    id: string;
    type: AlertType;
    read: boolean = false;
    view: boolean = true;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export interface DataAlert {
    message: string;
}