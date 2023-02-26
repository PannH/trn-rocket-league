"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class Profile {
    platform;
    username;
    avatarURL;
    countryCode;
    linkedAccounts;
    stats;
    constructor(data) {
        this.platform = data.platformInfo.platformSlug;
        this.username = data.platformInfo.platformUserHandle;
        this.avatarURL = data.platformInfo.avatarUrl;
        this.countryCode = data.userInfo.countryCode;
        this.linkedAccounts = data.userInfo.socialAccounts.map((account) => ({
            platform: account.platformSlug,
            username: account.platformUserHandle
        }));
        this.stats = new _1.ProfileStats(data);
    }
}
exports.default = Profile;
