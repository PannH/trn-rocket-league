import { Platform } from '../types';
import { Session } from '../classes';
/**
 * Fetch the recent match sessions from a Rocket League profile
 */
export default function fetchSessions(username: string, platform: Platform): Promise<Session[]>;
