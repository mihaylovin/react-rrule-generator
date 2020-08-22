import RecRule from './RecRule';
import Dtend from './Dtend';
import Summary from './Summary';
import Dtstart from './Dtstart';

class Vevent {
    constructor({
        dtstart,
        dtend,
        rrule,
        summary
    }) {
        
        this.dtstart = new Dtstart(dtstart);
        this.dtend = new Dtend(dtend);
        this.summary = new Summary(summary);
        this.rrule = new RecRule(rrule);

    }

    toString() {
        return "BEGIN:VEVENT" + "\r\n" + 
                this.summary.toString() + "\r\n" +
                this.dtstart.toString() + "\r\n" +
                this.dtend.toString() + "\r\n" + 
                this.rrule.toString() + "\r\n" + 
                "END:VEVENT";
    }

    toVCalendarString() {
        return "BEGIN:VCALENDAR" + "\r\n" + 
                this.toString() + "\r\n" +
                "END:VCALENDAR";
    }

    static parse(veventString) {
        let veventLines = veventString.split(/\r?\n/);

        let isVevent = false;
        veventLines = veventLines.filter((vl) => {
            isVevent = (vl.indexOf("VEVENT") != -1) ^ isVevent;

            return isVevent;
        });

        let veventObj = {};
        veventLines.forEach((vl) => {
            const vlParts = vl.split(":");
            switch(vlParts[0]) {
                case Summary.getLabel(): 
                    veventObj = {...veventObj, ...Summary.parse(vl)}; break;
                case Dtend.getLabel(): 
                    veventObj = {...veventObj, ...Dtend.parse(vl)}; break;
                case Dtstart.getLabel():
                    veventObj = {...veventObj, ...Dtstart.parse(vl)}; break;
                case RecRule.getLabel():
                    veventObj = {...RecRule.parse(vl), ...veventObj}; break;
            }
        });

        return veventObj;
    }
}

export default Vevent;