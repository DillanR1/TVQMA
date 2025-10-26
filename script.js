document.addEventListener('DOMContentLoaded', () => {
  let leaderboard = JSON.parse(localStorage.getItem('tvqmaLeaderboard')) || [
    { name: 'Kid A', points: 100, lastRace: 'Oct 25' },
    { name: 'Kid B', points: 95, lastRace: 'Oct 24' }
  ];

  function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    leaderboard.forEach(driver => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${driver.name}</td><td>${driver.points}</td><td>${driver.lastRace}</td>`;
      tbody.appendChild(row);
    });
    localStorage.setItem('tvqmaLeaderboard', JSON.stringify(leaderboard));
  }

  document.getElementById('update-leaderboard').addEventListener('click', () => {
    leaderboard[0].points += 5;
    leaderboard.sort((a, b) => b.points - a.points);
    renderLeaderboard();
    alert(`Updated! ${leaderboard[0].name} now leads with ${leaderboard[0].points} points!`);
  });

  renderLeaderboard();
});