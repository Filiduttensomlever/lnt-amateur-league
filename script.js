const teamsGrid = document.getElementById("teams-grid");

if (teamsGrid) {
  teams.forEach(team => {
    const card = document.createElement("a");
    card.className = "team-card";
    card.href = `team.html?id=${team.id}`;

    card.innerHTML = `
      <img src="${team.logo}" alt="${team.name}">
      <h2>${team.name}</h2>
      <p>${team.region}</p>
      <span>View Team →</span>
    `;

    card.addEventListener("click", event => {
  event.preventDefault();

  card.classList.add("team-card-clicked");
  document.body.classList.add("page-leaving");

  setTimeout(() => {
    window.location.href = card.href;
  }, 350);
});

teamsGrid.appendChild(card);
  });
}

const teamProfile = document.getElementById("team-profile");

if (teamProfile) {
  const params = new URLSearchParams(window.location.search);
  const teamId = params.get("id");

  const team = teams.find(t => t.id === teamId);
  const roster = rosters[teamId] || [];

  if (!team) {
    teamProfile.innerHTML = `<h1>Team not found</h1>`;
  } else {
    teamProfile.innerHTML = `
      <div class="profile-header">
        <img src="${team.logo}" alt="${team.name}">
        <div>
          <h1>${team.name}</h1>
          <p>${team.region}</p>
        </div>
      </div>

      <h2>Roster</h2>

      <div class="roster-list">
        ${roster.map(player => `
          <div class="player-row">
            <img src="${player.avatar}" alt="${player.nickname}">
            <span>${player.nickname}</span>
          </div>
        `).join("")}
      </div>
    `;
  }
}

const playersTableBody = document.getElementById("players-table-body");

if (playersTableBody) {
  const playerSearch = document.getElementById("player-search");
  const teamFilter = document.getElementById("team-filter");
  const playersCount = document.getElementById("players-count");
  const playersEmpty = document.getElementById("players-empty");

  const allPlayers = teams.flatMap(team => {
    const teamRoster = rosters[team.id] || [];

    return teamRoster.map(player => ({
      ...player,
      teamId: team.id,
      teamName: team.name,
      teamLogo: team.logo,
      region: team.region
    }));
  });

  teams.forEach(team => {
    const option = document.createElement("option");

    option.value = team.id;
    option.textContent = team.name;

    teamFilter.appendChild(option);
  });

  function renderPlayers() {
    const searchTerm = playerSearch.value.trim().toLowerCase();
    const selectedTeam = teamFilter.value;

    const filteredPlayers = allPlayers.filter(player => {
      const matchesSearch =
        player.nickname.toLowerCase().includes(searchTerm) ||
        player.teamName.toLowerCase().includes(searchTerm) ||
        player.region.toLowerCase().includes(searchTerm);

      const matchesTeam =
        selectedTeam === "all" || player.teamId === selectedTeam;

      return matchesSearch && matchesTeam;
    });

    playersTableBody.innerHTML = filteredPlayers.map(player => `
      <tr class="player-table-row">
        <td>
          <div class="player-table-profile">
            <img
              src="${player.avatar}"
              alt="Default avatar for ${player.nickname}"
            >

            <strong>${player.nickname}</strong>
          </div>
        </td>

        <td>
          <a
            href="team.html?id=${player.teamId}"
            class="player-team-link"
          >
            <img src="${player.teamLogo}" alt="">
            <span>${player.teamName}</span>
          </a>
        </td>

        <td class="player-region">${player.region}</td>
      </tr>
    `).join("");

    playersCount.textContent =
      `${filteredPlayers.length} ${filteredPlayers.length === 1 ? "player" : "players"}`;

    playersEmpty.hidden = filteredPlayers.length !== 0;
  }

  playerSearch.addEventListener("input", renderPlayers);
  teamFilter.addEventListener("change", renderPlayers);

  renderPlayers();
}

// Season 3 schedule notice
const scheduleNoticeEl = document.getElementById("schedule-notice");

if (scheduleNoticeEl && typeof seasonSchedule !== "undefined") {
  scheduleNoticeEl.innerHTML = `
    <article class="schedule-notice">
      <div class="schedule-notice-top">
        <span class="match-status tentative-status">
          ${seasonSchedule.status}
        </span>

        <span class="section-label">
          ${seasonSchedule.season}
        </span>
      </div>

      <h2>Expected Match Week</h2>

      <p class="schedule-date">
        ${seasonSchedule.dateWindow}
      </p>

      <p>${seasonSchedule.message}</p>

      <span class="schedule-time">
        Match times: ${seasonSchedule.time}
      </span>
    </article>
  `;
}


// Empty upcoming/results sections
const upcomingMatchesEl = document.getElementById("upcoming-matches");
const recentResultsEl = document.getElementById("recent-results");

if (upcomingMatchesEl && recentResultsEl) {
  const upcomingCountEl = document.getElementById("upcoming-count");
  const resultsCountEl = document.getElementById("results-count");

  const upcomingMatchesData = matches.filter(
    match => match.status === "upcoming"
  );

  const finishedMatchesData = matches.filter(
    match => match.status === "finished"
  );

  upcomingCountEl.textContent =
    `${upcomingMatchesData.length} scheduled`;

  resultsCountEl.textContent =
    `${finishedMatchesData.length} completed`;

  if (upcomingMatchesData.length === 0) {
    upcomingMatchesEl.innerHTML = `
      <div class="matches-empty">
        No upcoming matches announced.
      </div>
    `;
  }

  if (finishedMatchesData.length === 0) {
    recentResultsEl.innerHTML = `
      <div class="matches-empty">
        No results available yet.
      </div>
    `;
  }
}

const rankingsTableBody =
  document.getElementById("rankings-table-body");

if (rankingsTableBody) {
  const rankingsNotice =
    document.getElementById("rankings-notice");

  const completedMatches = matches.filter(
    match => match.status === "finished"
  );

  const standings = teams.map(team => ({
    teamId: team.id,
    name: team.name,
    logo: team.logo,
    region: team.region,
    played: 0,
    wins: 0,
    losses: 0,
    mapsWon: 0,
    mapsLost: 0
  }));

  function getStanding(teamId) {
    return standings.find(
      standing => standing.teamId === teamId
    );
  }

  completedMatches.forEach(match => {
    const teamOne = getStanding(match.teamOne);
    const teamTwo = getStanding(match.teamTwo);

    if (!teamOne || !teamTwo) {
      return;
    }

    const scoreOne = Number(match.scoreOne);
    const scoreTwo = Number(match.scoreTwo);

    if (
      !Number.isFinite(scoreOne) ||
      !Number.isFinite(scoreTwo)
    ) {
      return;
    }

    teamOne.played += 1;
    teamTwo.played += 1;

    teamOne.mapsWon += scoreOne;
    teamOne.mapsLost += scoreTwo;

    teamTwo.mapsWon += scoreTwo;
    teamTwo.mapsLost += scoreOne;

    if (scoreOne > scoreTwo) {
      teamOne.wins += 1;
      teamTwo.losses += 1;
    } else if (scoreTwo > scoreOne) {
      teamTwo.wins += 1;
      teamOne.losses += 1;
    }
  });

  standings.sort((teamA, teamB) => {
    const teamAMapDifference =
      teamA.mapsWon - teamA.mapsLost;

    const teamBMapDifference =
      teamB.mapsWon - teamB.mapsLost;

    return (
      teamB.wins - teamA.wins ||
      teamBMapDifference - teamAMapDifference ||
      teamA.name.localeCompare(teamB.name)
    );
  });

  rankingsTableBody.innerHTML = standings
    .map((team, index) => {
      const mapDifference =
        team.mapsWon - team.mapsLost;

      const formattedDifference =
        mapDifference > 0
          ? `+${mapDifference}`
          : `${mapDifference}`;

      return `
        <tr class="ranking-row">
          <td>
            <span class="ranking-position">
              ${index + 1}
            </span>
          </td>

          <td>
            <a
              href="team.html?id=${team.teamId}"
              class="ranking-team"
            >
              <img
                src="${team.logo}"
                alt="${team.name} logo"
              >

              <div>
                <strong>${team.name}</strong>
                <span>${team.region}</span>
              </div>
            </a>
          </td>

          <td>${team.played}</td>
          <td class="ranking-wins">${team.wins}</td>
          <td class="ranking-losses">${team.losses}</td>

          <td class="${
            mapDifference > 0
              ? "positive-difference"
              : mapDifference < 0
                ? "negative-difference"
                : ""
          }">
            ${formattedDifference}
          </td>
        </tr>
      `;
    })
    .join("");

  if (completedMatches.length === 0) {
    rankingsNotice.innerHTML = `
      <article class="rankings-notice">
        <span class="match-status tentative-status">
          Pre-season
        </span>

        <div>
          <strong>Season 3 rankings have not started yet.</strong>

          <p>
            All teams begin with zero matches. The standings
            will update when completed results are added.
          </p>
        </div>
      </article>
    `;
  }
}

/* =========================
   HOMEPAGE
========================= */

const homeTeamsGrid =
  document.getElementById("home-teams-grid");

if (homeTeamsGrid) {
  const homeTeamCount =
    document.getElementById("home-team-count");

  const homePlayerCount =
    document.getElementById("home-player-count");

  const homeMatchCount =
    document.getElementById("home-match-count");

  const homeSeasonNotice =
    document.getElementById("home-season-notice");

  const homeUpcomingMatches =
    document.getElementById("home-upcoming-matches");

  const totalRosterSlots = Object.values(rosters).reduce(
    (total, roster) => total + roster.length,
    0
  );

  const completedHomeMatches = matches.filter(
    match => match.status === "finished"
  );

  const upcomingHomeMatches = matches.filter(
    match => match.status === "upcoming"
  );

  homeTeamCount.textContent = teams.length;
  homePlayerCount.textContent = totalRosterSlots;
  homeMatchCount.textContent = completedHomeMatches.length;

  // Season 3 notice
  if (
    homeSeasonNotice &&
    typeof seasonSchedule !== "undefined"
  ) {
    homeSeasonNotice.innerHTML = `
      <article class="home-schedule-card">
        <div class="home-schedule-main">
          <span class="match-status tentative-status">
            ${seasonSchedule.status}
          </span>

          <div>
            <h3>Expected Match Week</h3>

            <p class="home-schedule-date">
              ${seasonSchedule.dateWindow}
            </p>

            <p>
              ${seasonSchedule.message}
            </p>
          </div>
        </div>

        <div class="home-schedule-time">
          <span>Match times</span>
          <strong>${seasonSchedule.time}</strong>
        </div>
      </article>
    `;
  }

  // Team cards
  homeTeamsGrid.innerHTML = teams.map(team => {
    const roster = rosters[team.id] || [];

    return `
      <a
        href="team.html?id=${team.id}"
        class="home-team-card"
      >
        <div class="home-team-logo">
          <img
            src="${team.logo}"
            alt="${team.name} logo"
          >
        </div>

        <div class="home-team-info">
          <h3>${team.name}</h3>
          <p>${team.region}</p>
        </div>

        <div class="home-team-bottom">
          <span>
            ${roster.length}
            ${roster.length === 1 ? "player" : "players"}
          </span>

          <strong>View →</strong>
        </div>
      </a>
    `;
  }).join("");

  // Upcoming matches preview
  if (upcomingHomeMatches.length === 0) {
    homeUpcomingMatches.innerHTML = `
      <article class="home-empty-matches">
        <span class="match-status tentative-status">
          Schedule pending
        </span>

        <h3>No matches have been confirmed yet</h3>

        <p>
          Season 3 matchups, dates, and times will appear here
          when the schedule is announced.
        </p>

        <a href="matches.html">
          View schedule information →
        </a>
      </article>
    `;
  } else {
    homeUpcomingMatches.innerHTML = upcomingHomeMatches
      .slice(0, 3)
      .map(match => {
        const teamOne = teams.find(
          team => team.id === match.teamOne
        );

        const teamTwo = teams.find(
          team => team.id === match.teamTwo
        );

        if (!teamOne || !teamTwo) {
          return "";
        }

        return `
          <article class="home-match-card">
            <div class="home-match-date">
              <span>${match.date}</span>
              <strong>${match.time}</strong>
            </div>

            <div class="home-match-teams">
              <div>
                <img
                  src="${teamOne.logo}"
                  alt="${teamOne.name} logo"
                >
                <span>${teamOne.name}</span>
              </div>

              <strong>VS</strong>

              <div>
                <img
                  src="${teamTwo.logo}"
                  alt="${teamTwo.name} logo"
                >
                <span>${teamTwo.name}</span>
              </div>
            </div>

            <div class="home-match-format">
              ${match.format}
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Team-card click animation
  const homeTeamCards =
    document.querySelectorAll(".home-team-card");

  homeTeamCards.forEach(card => {
    card.addEventListener("click", event => {
      event.preventDefault();

      card.classList.add("home-team-card-clicked");
      document.body.classList.add("home-page-leaving");

      setTimeout(() => {
        window.location.href = card.href;
      }, 300);
    });
  });
}