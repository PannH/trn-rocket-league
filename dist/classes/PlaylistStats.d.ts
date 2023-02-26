import type { Rank } from '../types';
export default class PlaylistStats {
    rank: Rank;
    matchesPlayed: number;
    winStreak: number;
    loseStreak: number;
    mmr: number;
    constructor(segmentData: any);
}
