const teams = [
    {
        id: "btm",
        name: "BTM",
        logo: "assets/logos/btm.webp",
        region: "Finland"
    },
    {
        id: "finals",
        name: "Finals",
        logo: "assets/logos/finals.png",
        region: "France"
    },
    {
        id: "plato-esports",
        name: "PLATO Esports",
        logo: "assets/logos/plato-esports.jpg",
        region: "Europe"
    },
    {
        id: "revo",
        name: "REVO",
        logo: "assets/logos/revo.jpg",
        region: "Czech Republic"
    },
    {
        id: "swedish-mafia",
        name: "SWEDISH MAFIA",
        logo: "assets/logos/swedish-mafia.png",
        region: "Sweden"
    },
    {
        id: "vexors",
        name: "Team VEXORS",
        logo: "assets/logos/vexors.jpeg",
        region: "Europe"
    },
];

const rosters = {
    "swedish-mafia": [
        {
            nickname: "Henke",
            avatar: "assets/avatars/player.webp",
            country: "Sweden",
            countryCode: "SE",
            leagueTitles: 1
        },
        {
            nickname: "Aggen",
            avatar: "assets/avatars/player.webp",
            country: "Sweden",
            countryCode: "SE",
            leagueTitles: 1
        },
        {
            nickname: "Dandej",
            avatar: "assets/avatars/player.webp",
            country: "Sweden",
            countryCode: "SE",
            leagueTitles: 1
        },
        {
            nickname: "Ajr0x",
            avatar: "assets/avatars/player.webp",
            country: "Sweden",
            countryCode: "SE",
            leagueTitles: 2
        },
        {
            nickname: "KiKi",
            avatar: "assets/avatars/player.webp",
            country: "Sweden",
            countryCode: "SE",
            leagueTitles: 1
        }
    ],
    "vexors": [
        {
            nickname: "arowyce",
            avatar: "assets/avatars/player.webp",
            country: "Romania",
            countryCode: "RO",
            leagueTitles: 1
        },
        {
            nickname: "cripsy",
            avatar: "assets/avatars/player.webp",
            country: "Romania",
            countryCode: "RO",
            leagueTitles: 1
        },
        {
            nickname: "Kranq",
            avatar: "assets/avatars/player.webp",
            country: "Romania",
            countryCode: "RO",
            leagueTitles: 1
        },
        {
            nickname: "Enzon2",
            avatar: "assets/avatars/player.webp",
            country: "Estonia",
            countryCode: "EE",
            leagueTitles: 0
        },
        {
            nickname: "g0tl1b",
            avatar: "assets/avatars/player.webp",
            country: "Ukraine",
            countryCode: "UA",
            leagueTitles: 1
        }
    ],
    "btm": [
        {
            nickname: "Aar0",
            avatar: "assets/avatars/player.webp",
            country: "Finland",
            countryCode: "FI",
            leagueTitles: 0
        },
        {
            nickname: "Gl1tch",
            avatar: "assets/avatars/player.webp",
            country: "Finland",
            countryCode: "FI",
            leagueTitles: 0
        },
        {
            nickname: "P0ntso",
            avatar: "assets/avatars/player.webp",
            country: "Finland",
            countryCode: "FI",
            leagueTitles: 0
        },
        {
            nickname: "zoxs",
            avatar: "assets/avatars/player.webp",
            country: "Finland",
            countryCode: "FI",
            leagueTitles: 0
        },
        {
            nickname: "Patukka",
            avatar: "assets/avatars/player.webp",
            country: "Finland",
            countryCode: "FI",
            leagueTitles: 0
        }
    ],
    "finals": [
        {
            nickname: "Volcan?",
            avatar: "assets/avatars/player.webp",
            country: "France",
            countryCode: "FR",
            leagueTitles: 0
        },
        {
            nickname: "Gaweu",
            avatar: "assets/avatars/player.webp",
            country: "France",
            countryCode: "FR",
            leagueTitles: 0
        },
        {
            nickname: "Heliozz",
            avatar: "assets/avatars/player.webp",
            country: "France",
            countryCode: "FR",
            leagueTitles: 0
        },
        {
            nickname: "Mamlook",
            avatar: "assets/avatars/player.webp",
            country: "France",
            countryCode: "FR",
            leagueTitles: 0
        },
        {
            nickname: "Nanachi",
            avatar: "assets/avatars/player.webp",
            country: "France",
            countryCode: "FR",
            leagueTitles: 0
        }
    ],
    "plato-esports": [
        {
            nickname: "TBD",
            avatar: "assets/avatars/player.webp",
            country: "Not listed",
            countryCode: "",
            leagueTitles: 0
        },
        {
            nickname: "TBD",
            avatar: "assets/avatars/player.webp",
            country: "Not listed",
            countryCode: "",
            leagueTitles: 0
        },
        {
            nickname: "TBD",
            avatar: "assets/avatars/player.webp",
            country: "Not listed",
            countryCode: "",
            leagueTitles: 0
        },
        {
            nickname: "TBD",
            avatar: "assets/avatars/player.webp",
            country: "Not listed",
            countryCode: "",
            leagueTitles: 0
        },
        {
            nickname: "TBD",
            avatar: "assets/avatars/player.webp",
            country: "Not listed",
            countryCode: "",
            leagueTitles: 0
        }
    ],
    "revo": [
        {
            nickname: "Mike",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        },
        {
            nickname: "Rev",
            avatar: "assets/avatars/player.webp",
            country: "Kosovo",
            countryCode: "XK",
            leagueTitles: 0
        },
        {
            nickname: "Pavlos",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        },
        {
            nickname: "rocket1405",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        },
        {
            nickname: "Jacob",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        }
    ],
};

const seasonSchedule = {
  season: "Season 3",
  status: "Tentative",
  dateWindow: "6–12 July 2026",
  time: "TBD",
  message:
    "Matches are expected to be played sometime between Monday and Sunday. Exact matchups, dates, and times will be announced soon."
};

const matches = [];