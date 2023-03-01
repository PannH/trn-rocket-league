import type { RankDivision, RankTier } from '../types';
export default class MatchRank {
    tier: RankTier;
    division: RankDivision;
    newMMR: number;
    oldMMR: number;
    mmrDelta: number;
    imageURL: string;
    constructor(data: any);
}
