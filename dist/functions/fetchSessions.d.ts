import { Platform } from '../types';
import { Session } from '../classes';
export default function fetchSessions(username: string, platform: Platform): Promise<Session[]>;
