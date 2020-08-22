import moment from 'moment';

class Dtstart {
    constructor(dtstart) {
        this.dtstart = dtstart;
    }

    toString() {
        return Dtstart.getLabel() + ":" + moment(this.dtstart).utc().format("YYYYMMDDTHHmmss[Z]");
    }

    toObject() {
        return {
            dtstart: this.dtstart
        }
    }

    static getLabel() {
        return "DTSTART";
    }

    static parse(dtstartLine) {
        const dtstartParts = dtstartLine.split(/:/);

        return {dtstart: moment.utc(dtstartParts[1], "YYYYMMDDTHHmmss[Z]").toDate()};
    }
}

export default Dtstart;