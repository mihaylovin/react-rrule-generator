import RRule from 'rrule';
import Dtend from './Dtend';
import Summary from './Summary';

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
        const str = "BEGIN:VEVENT" + "\r\n" + 
                    this.dtend.toString() + "\r\n" + 
                    this.rr.toString() + "\r\n" + 
                    "END:VEVENT";

        return str;
    }
}

export default Vevent;