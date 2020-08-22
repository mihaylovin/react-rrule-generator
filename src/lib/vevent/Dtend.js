import moment from 'moment';

class Dtend {
    constructor(dtend) {
        this.dtend = dtend;
    }

    toString() {
        return  Dtend.getLabel() + ":" + moment(this.dtend).utc().format("YYYYMMDDTHHmmss[Z]");
    }

    toObject() {
        return {
            dtend: this.dtend
        }
    }

    static getLabel() {
        return "DTEND";
    }

    static parse(dtendLine) {
        const dtendParts = dtendLine.split(/:/);

        return {dtend: moment.utc(dtendParts[1], "YYYYMMDDTHHmmss[Z]").toDate()};
    }
}

export default Dtend;