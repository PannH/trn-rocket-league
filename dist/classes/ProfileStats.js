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
            duel: duelStats ? new _1.PlaylistStats(duelStats) : undefined,
            double: doubleStats ? new _1.PlaylistStats(doubleStats) : undefined,
            standard: standardStats ? new _1.PlaylistStats(standardStats) : undefined
        };
        const dropshotStats = data.segments.find((segment) => segment.metadata.name === 'Dropshot');
        const hoopsStats = data.segments.find((segment) => segment.metadata.name === 'Hoops');
        const rumbleStats = data.segments.find((segment) => segment.metadata.name === 'Rumble');
        const snowdayStats = data.segments.find((segment) => segment.metadata.name === 'Snowday');
        this.extra = {
            dropshot: dropshotStats ? new _1.PlaylistStats(dropshotStats) : undefined,
            hoops: hoopsStats ? new _1.PlaylistStats(hoopsStats) : undefined,
            rumble: rumbleStats ? new _1.PlaylistStats(rumbleStats) : undefined,
            snowday: snowdayStats ? new _1.PlaylistStats(snowdayStats) : undefined
        };
        const unrankedStats = data.segments.find((segment) => segment.metadata.name === 'Un-Ranked');
        this.unranked = unrankedStats ? new _1.PlaylistStats(unrankedStats) : undefined;
        const segmentsMatchesPlayed = [
            this.ranked.duel?.matchesPlayed,
            this.ranked.double?.matchesPlayed,
            this.ranked.standard?.matchesPlayed,
            this.extra.dropshot?.matchesPlayed,
            this.extra.hoops?.matchesPlayed,
            this.extra.rumble?.matchesPlayed,
            this.extra.snowday?.matchesPlayed,
            this.unranked?.matchesPlayed
        ].filter((element) => !!element);
        this.totalMatchesPlayed = segmentsMatchesPlayed.reduce((total, matchesPlayed) => total + matchesPlayed, 0);
    }
}
exports.default = ProfileStats;
