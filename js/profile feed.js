fetch("data/profile-feed.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("app");

 

    // Profile Feed Container
    const pf = data["profile-page"]["p-f-container"];
    let pfHTML = `<div class="${pf.class}">`;
    pfHTML += pf.images.map(img => `<img class="${img.class}" src="${img.src}" alt="${img.alt}">`).join("");
    pfHTML += `<p>${pf.text}</p></div>`;
    container.innerHTML += pfHTML;

    // Work Photos
    const wp = data["work-photos"];
    let wpHTML = `<div class="${wp.class}">`;
    wp.items.forEach(item => {
      
      if(item.type === "div") {
        // العنصر اللي فيه صورة + لينك + نص (Overlay)
        
        wpHTML += `<div class="img-link">
                      <img src="${item.src}" alt="">
                      <div class="text-link"><p> design services we offer</p><a class="link" href="portfolio.html"><i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>`;
      }
      else if (item.src) {
        // صورة عادية
        wpHTML += `<img src="${item.src}" alt="${item.alt}">`;
      } else if (item.block) {
        // بلوك فيه صورة + نص
        wpHTML += `<div><img src="${item.block.img.src}" alt="${item.block.img.alt}"><p>${item.block.p}</p></div>`;
      }  
    });
    wpHTML += `</div>`;
    container.innerHTML += wpHTML;

    // Building
    const building = data["biulding"];
    container.innerHTML += `<div class="${building.class}"><h2>${building.title}</h2></div>`;

    // Cards
    const cards = data.cards.items;
    let cardsHTML = `<div class="cards">`;
    cards.forEach(c => {
      cardsHTML += `<div class="advantages"><div class="card-head">${c["card-head"]}</div><ul class="card-pros">${c["card-pros"].map(p => `<li>${p}</li>`).join("")}</ul></div>`;
    });
    cardsHTML += `</div>`;
    container.innerHTML += cardsHTML;
  });
