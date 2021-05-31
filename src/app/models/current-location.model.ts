export class currentLocation {
    latitude: string;
    longitude: string;

    constructor(init?: Partial<currentLocation>) {
        Object.assign(this, init);
    }
}