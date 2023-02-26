import { ProfileStats } from './';
import type { LinkedAccount } from '../types';
export default class Profile {
    platform: string;
    username: string;
    avatarURL: string;
    countryCode: string;
    linkedAccounts: LinkedAccount[];
    stats: ProfileStats;
    constructor(data: any);
}
