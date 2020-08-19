import RRule from 'rrule';
import Dtend from './Dtend'

class Vevent {
    constructor({
        dtstart,
        dtend,
        rrule,
        summary
    }) {
        this.dtstart = dtstart;
        this.dtend = new Dtend(dtend);
        this.summary = new Summary(summary);
        this.rr = new RRule({...rrule, dtstart});

    }

    toString() {

        return this.dtend.toString() + "\r\n" + this.rr.toString();
    }
}

export default Vevent;