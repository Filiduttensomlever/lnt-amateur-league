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
        id: "swm-nxt",
        name: "SWM NXT",
        logo: "assets/logos/swm-nxt.png",
        region: "Sweden"
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
            nickname: "Bryan?",
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
            nickname: "Volcan?",
            avatar: "assets/avatars/player.webp",
            country: "France",
            countryCode: "FR",
            leagueTitles: 0
        },
        {
            nickname: "Maml00k",
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
        }
    ],
    "swm-nxt": [
        {
            nickname: "PYA",
            avatar: "assets/avatars/player.webp",
            country: "Sweden",
            countryCode: "SE",
            leagueTitles: 0
        },
        {
            nickname: "kyozin",
            avatar: "assets/avatars/player.webp",
            country: "Lithuania",
            countryCode: "LT",
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
            nickname: "Rev",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        },
        {
            nickname: "Kip",
            avatar: "assets/avatars/player.webp",
            country: "Kosovo",
            countryCode: "XK",
            leagueTitles: 0
        },
        {
            nickname: "Pasha",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        },
        {
            nickname: "Werkaaaa",
            avatar: "assets/avatars/player.webp",
            country: "Czech Republic",
            countryCode: "CZ",
            leagueTitles: 0
        },
        {
            nickname: "MrZenbe",
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
  dateWindow: "10-12 July 2026",
  time: "8pm CEST",
  message:
    "Vexors VS REVO, This is an estimated time nothing is confirmed."
};

const matches = [];