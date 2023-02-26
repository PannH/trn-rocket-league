"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlaylistStats {
    rank;
    matchesPlayed;
    winStreak;
    loseStreak;
    mmr;
    constructor(segmentData) {
        const tierData = segmentData.stats.tier;
        const divisionData = segmentData.stats.division;
        this.rank = {
            tier: {
                index: tierData.value,
                name: tierData.metadata.name
            },
            division: {
                index: divisionData.value,
                name: divisionData.metadata.name
            },
            imageURL: tierData.metadata.iconUrl
        };
        this.matchesPlayed = segmentData.stats.matchesPlayed.value;
        this.winStreak = segmentData.stats.winStreak.metadata.type === 'win' ? segmentData.stats.winStreak.value : 0;
        this.loseStreak = segmentData.stats.winStreak.metadata.type === 'loss' ? segmentData.stats.winStreak.value : 0;
        this.mmr = segmentData.stats.rating.value;
    }
}
exports.default = PlaylistStats;
