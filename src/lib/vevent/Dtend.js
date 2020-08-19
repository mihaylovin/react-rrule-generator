import moment from 'moment';

class Dtend {
    constructor(dtend) {
        this.dtend = dtend;
    }

    toString() {
        return "DTEND:" + moment(this.dtend).utc().format("YYYYMMDDTHHmmss[Z]");
    }
}

export default Dtend;