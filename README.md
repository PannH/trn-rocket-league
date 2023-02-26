![npm version](https://img.shields.io/npm/v/trn-rocket-league?color=c80000&label=npm%20version) ![Downloads](https://img.shields.io/npm/dt/trn-rocket-league?label=Downloads)

# 🚗 TRN Rocket League
> `trn-rocket-league` is an easy-to-use and typed library that allows you to fetch data from a Rocket League profile.

# 🔰 Getting Started
1. Installation
```bash
npm install trn-rocket-league
```

2. Import it and fetch a profile
```js
const { fetchProfile } = require('trn-rocket-league');

const profile = await fetchProfile('PannH.', 'epic');
// Returns: https://sourceb.in/HzZO9vQcBp
```

# 📖 Documentation
The `fetchProfile()` function returns an instance of `Profile` which can be represented as :
```js
Profile {
   platform: 'psn' | 'xbl' | 'steam' | 'epic';
   username: string;
   avatarURL: string | null;
   countryCode: string;
   linkedAccounts: {
      platform: string;
      username: string;
   }[];
   stats: {
      overview: {
         assists: number;
         goals: number;
         goalShotRatio: number;
         mvps: number;
         saves: number;
         shots: number;
         wins: number;
      };
      ranked: {
         duel: {
            rank: {
               tier: {
                  index: number;
                  name: string;
               };
               division: {
                  index: number;
                  name: string;
               };
               imageURL: string;
            };
            matchesPlayed: number;
            winStreak: number;
            mmr: number;
         };
         double: {...}; // same as above
         standard: {...}; // same as above
      };
      extra: {
         dropshot: {...}; // same as above
         hoops: {...}; // same as above
         rumble: {...}; // same as above
         snowday: {...}; // same as above
      };
      unranked: {...}; // same as above
      totalMatchesPlayed: number;
   }
}
```
Example: https://sourceb.in/HzZO9vQcBp