import { MatchStats } from './';
export default class Match {
    id: string;
    isGrouped: boolean;
    date: Date;
    playlist: string;
    stats: MatchStats;
    constructor(data: any);
}
