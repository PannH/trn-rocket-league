"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const classes_1 = require("../classes");
/**
 * Fetch a Rocket League profile
 */
async function fetchProfile(username, platform) {
    return new Promise((resolve, reject) => {
        const AVAILABLE_PLATFORMS = ['epic', 'psn', 'steam', 'xbl'];
        if (!AVAILABLE_PLATFORMS.includes(platform))
            return reject(new TypeError(`The platform must be one of: ${AVAILABLE_PLATFORMS.join(', ')}`));
        const PROFILE_API_BASE_URL = 'https://api.tracker.gg/api/v2/rocket-league/standard/profile';
        (0, child_process_1.exec)(`curl --user-agent 'Chrome/79' --url ${PROFILE_API_BASE_URL}/${platform}/${username}`, (error, stdout, stderr) => {
            const response = JSON.parse(stdout);
            if (response?.errors && response?.errors[0]?.code === 'CollectorResultStatus::NotFound')
                return reject(new Error(`No profile found for '${platform}/${username}'`));
            const { data } = response;
            return resolve(new classes_1.Profile(data));
        });
    });
}
exports.default = fetchProfile;
