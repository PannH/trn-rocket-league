"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class MatchRank {
    tier;
    division;
    newMMR;
    oldMMR;
    mmrDelta;
    imageURL;
    constructor(data) {
        this.tier = {
            name: data.metadata.tier,
            index: utils_1.ranks.indexOf(data.metadata.tier)
        };
        this.division = {
            name: data.metadata.division,
            index: utils_1.divisions.indexOf(data.metadata.division)
        };
        this.oldMMR = data.value - data.metadata.ratingDelta;
        this.newMMR = data.value;
        this.mmrDelta = data.metadata.ratingDelta;
        this.imageURL = data.metadata.iconUrl;
    }
}
exports.default = MatchRank;
