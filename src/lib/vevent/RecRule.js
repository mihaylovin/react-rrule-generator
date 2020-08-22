import RRule, { rrulestr as RRuleObjectFromString }  from 'rrule';

class RecRule {
    constructor(rrule) {
        this.rrule = new RRule(rrule);
    }

    toString() {
        return this.rrule.toString();
    }

    static getLabel() {
        return "RRULE";
    }

    static parse(rruleLine) {
        console.log(RRuleObjectFromString(rruleLine).origOptions)
        return RRuleObjectFromString(rruleLine).origOptions;
    }
}

export default RecRule;