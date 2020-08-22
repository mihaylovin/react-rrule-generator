class Summary {
    constructor(summary) {
        this.summary = summary;
    }

    toString() {
        return Summary.getLabel() + ":" + this.summary;
    }

    toObject() {
        return {
            summary: this.summary
        }
    }

    static getLabel() {
        return "SUMMARY";
    }

    static parse(summaryLine) {
        const summaryParts = summaryLine.split(/:/);

        return {summary: summaryParts[1] || ""};
    }
}

export default Summary;