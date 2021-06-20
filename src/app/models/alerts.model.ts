import { AlertType } from "../enums/alert.enum";

export class Alert {
    alert: any;
    id: string;
    type: AlertType;
    read: boolean;
    view: boolean;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}
