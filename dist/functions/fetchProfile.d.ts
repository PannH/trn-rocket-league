import { Profile } from '../classes';
import type { Platform } from '../types';
/**
 * Fetch a Rocket League profile
 */
export default function fetchProfile(username: string, platform: Platform): Promise<Profile>;
