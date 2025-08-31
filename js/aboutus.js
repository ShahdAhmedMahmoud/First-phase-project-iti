fetch("data/about.json")
  .then(res => res.json())
  .then(data => {
    // main 
    document.getElementById("main").innerHTML = `
      <p class="line">${data.main.text}</p>
    `;

// Who We Are
let paragraphs = "";
data.whoWeAre.description.forEach(desc => {
  paragraphs += `<p class="story">${desc}</p>`;
});

document.getElementById("who").innerHTML = `
  <img src="${data.whoWeAre.logo}" alt="Logo" class="who-logo">
  <h2 class="title">${data.whoWeAre.title}</h2>
  <div class="divider"></div>
  ${paragraphs}
`;


    // stats
    let statsHTML = "";
    data.stats.forEach(stat => {
      statsHTML += `
        <div class="stat">
          <div class="num">${stat.num}</div>
          <div class="label">${stat.label}</div>
        </div>
      `;
    });
    document.getElementById("stats").innerHTML = statsHTML;

    // leadership
    let leadersHTML = "";
    data.leadership.forEach(leader => {
      leadersHTML += `
        <article class="leader-card">
          <img src="${leader.photo}" alt="${leader.name}" class="leader-photo">
          <h3 class="leader-name">${leader.name}</h3>
          <p class="leader-role">${leader.role}</p>
          <p class="leader-bio">${leader.bio}</p>
        </article>
      `;
    });
    document.getElementById("leaders").innerHTML = leadersHTML;

    // insta
    let instaHTML = "";
    data.instagram.forEach(img => {
      instaHTML += `<img src="${img}" class="insta" alt="Instagram photo">`;
    });
    document.getElementById("insta").innerHTML = instaHTML;
  });
