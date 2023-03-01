"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Match {
    isGrouped;
    date;
    playlist;
    stats;
    constructor(data) {
        this.isGrouped = data.metadata.isGrouped;
        this.date = new Date(data.metadata.dateCollected);
        this.playlist = data.metadata.playlist;
        this.stats = new _1.MatchStats(data.stats);
    }
}
exports.default = Match;
