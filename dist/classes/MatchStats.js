"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchRank_1 = __importDefault(require("./MatchRank"));
class MatchStats {
    saves;
    assists;
    goals;
    matchesPlayed;
    mvps;
    shots;
    wins;
    rank;
    constructor(data) {
        this.rank = data.rating ? new MatchRank_1.default(data.rating) : undefined;
        this.saves = data.saves.value;
        this.assists = data.assists.value;
        this.goals = data.goals.value;
        this.matchesPlayed = data.matchesPlayed.value;
        this.mvps = data.mvps.value;
        this.shots = data.shots.value;
        this.wins = data.wins.value;
    }
}
exports.default = MatchStats;
