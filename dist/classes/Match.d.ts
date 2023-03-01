import { MatchStats } from './';
export default class Match {
    isGrouped: boolean;
    date: Date;
    playlist: string;
    stats: MatchStats;
    constructor(data: any);
}
