import { PlaylistStats } from './';
import type { ExtraStats, OverviewStats, RankedStats } from '../types';
export default class ProfileStats {
    overview: OverviewStats;
    ranked: RankedStats;
    extra: ExtraStats;
    unranked: PlaylistStats;
    totalMatchesPlayed: number;
    constructor(data: any);
}
