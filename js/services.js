fetch("data/services.json")
  .then(response => response.json())
  .then(data => {
    const services = data.services;
    const servicesSection = document.getElementById("services");

    services.forEach((service, index) => {
      const reverse = index % 2 !== 0 ? "md:flex-row-reverse" : "";

      servicesSection.innerHTML += `
        <div class="flex flex-col md:flex-row ${reverse} items-center gap-8 ">
          <div class="flex-1 space-y-4">
            <h2 class="text-5xl font-bold text-gray-800 mb-8">${service.number} ${service.title}</h2>
            <p class="text-xl" style="margin-top:40px">${service.description}</p>
          </div>
          <div class="flex-1 w-full h-[500px]  overflow-hidden">
            <img src="${service.image}" alt="${service.title}" class="w-full h-full shadow-lg object-cover transition-transform duration-300 hover:scale-110"/>
          </div>
        </div>
      `;
    });
  });
  fetch("data/services.json")
      .then(res => res.json())
      .then(data => {
        const instagrams = data.instagrams;
        const instaSection = document.getElementById("insta");
        let instaHTML =`<div class="text-center ">
                           <h2 class="text-5xl font-bold text-gray-800 text-center border-b-2 inline-block mx-auto ">FIND US ON INSTAGRAM</h2>
                        </div>
                         <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[50px]">`;
        
        instagrams.forEach(img => {
          instaHTML +=  `
        <div class="w-full h-64 overflow-hidden">
          <img class="w-full h-full object-cover transition-transform duration-300 hover:scale-110 " src="${img}" alt="Instagram Photo">
        </div>
      `;
        });
        
        instaHTML += '</div>';
        instaSection.innerHTML = instaHTML;
      });  






