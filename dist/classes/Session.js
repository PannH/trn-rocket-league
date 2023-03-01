"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Session {
    matches;
    constructor(data) {
        this.matches = data.matches.map((matchData) => new _1.Match(matchData));
    }
}
exports.default = Session;
