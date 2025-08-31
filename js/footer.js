    fetch("data/footer.json")
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("footer");
         const footer = data.footer;
        

        // Footer socials
       
        const socialHTML = footer.contact.socials.map(s => `
          <a href="${s.link}" target="_blank">
            <i class="fa-brands fa-${s.platform}"></i>
          </a>
        `).join('');

        // Footer links
        const linksHTML = footer.links.map(l => `
          <a class="a-links" href="#"><p class="p-links">${l}</p></a>
        `).join('');

        // Footer Instagram images with title
        
const instaHTML = `
  <h2>INSTAGRAM</h2>
  <div class="insta-photos">
    ${footer.instagram.slice(1).map(img => `   
      <img class="photos" src="${img}" alt="">
    `).join('')}
  </div>
`;
        // Footer call section
        const callHTML = `
          <div class="down-container-4">
            <p class="call-word">${footer.callSection.title}</p>
            <p class="call-num"><i class="fas fa-phone mr-2 pb-3"></i>&#124; ${footer.callSection.phone}</p>
            <p class="text-gray-300">${footer.callSection.description}</p>
            <p class="call-num mb-3 text-sm">${footer.callSection.copyright}</p>
          </div>
        `;

        // Footer HTML
        const footerHTML = `
          <footer>
            <div class="up-part-footer">
              <img class="up-part-footer-img" src="images/footer/Rectangle 21.jpg" alt="">
              <p class="p-contact">Contact us for more details</p>
              <a href="contact.html"><button class="button-contact">CONTACT US <span style="font-size: 10px;">></span></button></a>
            </div>

            <div class="down-footer">
              <img class="down-footer-img" src="images/footer/Footer-down.jpg" alt="">

              <div class="down-container-1">
               <img class="arthouse-img" src="images/footer/arthouse.png">
                
                <p><i class="fa-solid fa-house icon-1"></i> ${footer.contact.address}</p>
                <p><i class="fa-solid fa-envelope icon-1"></i> ${footer.contact.email}</p>
                <p>Follow us:</p>
                <div class="logos">${socialHTML}</div>
              </div>

              <div class="down-container-2">${linksHTML}</div>

              <div class="down-container-3">${instaHTML}</div>

              ${callHTML}
            </div>
          </footer>
        `;

        container.innerHTML =  footerHTML;

        // Hover effects for social icons
        const icons = document.querySelectorAll(".logos i");
        icons.forEach(icon => {
          icon.addEventListener("mouseover", () => { icon.style.transform = "scale(1.3)"; });
          icon.addEventListener("mouseout", () => { icon.style.transform = "scale(1)"; });
        });

        // Hover effects for Instagram photos
        const photos = document.querySelectorAll(".insta-photos img");
        photos.forEach(photo => {
          photo.addEventListener("mouseover", () => { photo.style.transform = "scale(1.2)"; });
          photo.addEventListener("mouseout", () => { photo.style.transform = "scale(1)"; });
        });
      });