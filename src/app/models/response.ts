export class Data {
    constructor(
        public status: string,
        public message: string,
        public type: string,
        public data?: any
    )
    { }
}