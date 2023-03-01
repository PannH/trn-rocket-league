import MatchRank from './MatchRank';
export default class MatchStats {
    saves: number;
    assists: number;
    goals: number;
    matchesPlayed: number;
    mvps: number;
    shots: number;
    wins: number;
    rank: MatchRank;
    constructor(data: any);
}
