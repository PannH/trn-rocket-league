"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class ProfileStats {
    overview;
    ranked;
    extra;
    unranked;
    totalMatchesPlayed;
    constructor(data) {
        const overviewStats = data.segments.find((segment) => segment.type === 'overview').stats;
        this.overview = {
            assists: overviewStats.assists.value,
            goals: overviewStats.goals.value,
            goalShotRatio: overviewStats.goalShotRatio.value,
            mvps: overviewStats.mVPs.value,
            saves: overviewStats.saves.value,
            shots: overviewStats.shots.value,
            wins: overviewStats.wins.value
        };
        const duelStats = data.segments.find((segment) => segment.metadata.name === 'Ranked Duel 1v1');
        const doubleStats = data.segments.find((segment) => segment.metadata.name === 'Ranked Doubles 2v2');
        const standardStats = data.segments.find((segment) => segment.metadata.name === 'Ranked Standard 3v3');
        this.ranked = {
            duel: new _1.PlaylistStats(duelStats),
            double: new _1.PlaylistStats(doubleStats),
            standard: new _1.PlaylistStats(standardStats)
        };
        const dropshotStats = data.segments.find((segment) => segment.metadata.name === 'Dropshot');
        const hoopsStats = data.segments.find((segment) => segment.metadata.name === 'Hoops');
        const rumbleStats = data.segments.find((segment) => segment.metadata.name === 'Rumble');
        const snowdayStats = data.segments.find((segment) => segment.metadata.name === 'Snowday');
        this.extra = {
            dropshot: new _1.PlaylistStats(dropshotStats),
            hoops: new _1.PlaylistStats(hoopsStats),
            rumble: new _1.PlaylistStats(rumbleStats),
            snowday: new _1.PlaylistStats(snowdayStats)
        };
        const unrankedStats = data.segments.find((segment) => segment.metadata.name === 'Un-Ranked');
        this.unranked = new _1.PlaylistStats(unrankedStats);
        this.totalMatchesPlayed =
            this.ranked.duel.matchesPlayed +
                this.ranked.double.matchesPlayed +
                this.ranked.standard.matchesPlayed +
                this.extra.dropshot.matchesPlayed +
                this.extra.hoops.matchesPlayed +
                this.extra.rumble.matchesPlayed +
                this.extra.snowday.matchesPlayed +
                this.unranked.matchesPlayed;
    }
}
exports.default = ProfileStats;
