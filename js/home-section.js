fetch("data/home.json")
  .then(res => res.json())
  .then(data => {
    // hero text
    document.getElementById("subtitle").textContent = data.hero.subtitle;
    document.getElementById("title").innerHTML = `${data.hero.title} <span>${data.hero.highlight}</span>`;

    // services
    let servicesHTML = "";
    data.hero.services.forEach(service => {
      servicesHTML += `
        <div class="service-card">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      `;
    });
    document.getElementById("services").innerHTML = servicesHTML;

    // allerttt
    document.getElementById("playBtn").addEventListener("click", () => {
      alert("Play Video: " + data.hero.videoUrl);
    });
  });








fetch('data/home.json')
  .then(res => res.json())
  .then(data => {
    const services = data.services;
    const container = document.getElementById("root");

    
    let htmlContent = `
      <div class="w-24 mx-auto mb-4">
        <img src="images/home/075ae30a43e0a65b6e3f4e5ec76bb89edb6c8904.jpg" class="w-full"/>
      </div>
    `;

   
    const first = services[0];
    htmlContent += `
      <div class="container text-center mx-auto    mb-8">
        <h1 class="font-semibold text-xl md:text-3xl mx-auto">${first.title}</h1>
        <hr class="w-1/4 border border-black mx-auto my-4"/>
        <p class="mx-auto">${first.description}</p>
        ${first.image ? `<img src="${first.image}" alt="${first.title}" />` : ''}
      </div>
    `;

 
    const second = services[1];
    htmlContent += `
      <div class="container mx-auto mb-8   bg-[#f8f8f8] p-4 rounded ">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
                 <div class="self-start">
           <h1 class="font-semibold text-xl md:text-3xl mx-auto my-4">${second.title}</h1>
           <p class="mx-auto">${second.description}</p>
           <button class="bg-black text-white px-4 py-2 rounded my-4 hover:bg-gray-800 transition">
              <a href="">
                 REQUEST A  CONSULTATION <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
           </button>
       </div>
        <div class="relative border-1 border-black  h-96  overflow-visible">
            ${second.image ? `<img src="${second.image}"  class="absolute -top-6 -left-5 w-full  h-full object-cover  shadow-lg" alt="${second.title}" />` : ''}
        </div>
         
         
         </div>
      </div>
    `;

    container.innerHTML = htmlContent;
  })
  .catch(err => console.error("Error:", err));





// 3rd section 
fetch('data/home.json')
.then(res => res.json())
.then(data => {
    const amenities = document.getElementById("amenities");
    data.amenities.forEach(function(amen){
        amenities.innerHTML += `<div class="amenitie">
            <div class="icon mb-4"><i class="${amen.icon}"></i></div>
            <span style="color: #90B300;">Amenities</span>
            <h5 class="font-medium text-xl"><u>${amen.name}</u></h5>
            <p class="mt-10 amenitie-text">${amen.description}</p>
            </div>`;
    });
    
    document.getElementById('company-icon').src = data.iconUrl;

    const ourWork = document.getElementById('our-work');

    data.projects.forEach(project => {
        ourWork.innerHTML += `
            <div>
                <img class="w-full aspect-[450/380] object-cover" src="${project.img}" alt="">
                <p class="text-2xl font-semibold ms-2 mb-2 mt-5">${project.tittle}</p>
                <p class="text-1xl font-normal ms-2">${project.category}</p>
            </div>
        `;
    });

})
.catch(err => console.log(err));



  //4th section
    fetch("data/home.json")
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("app");
        const apt = data.apartment;
        




        // Apartment features
        const featuresHTML = apt.features.map(f => `
          <div class="descripe">
            <div><i class=" isolid fa-solid ${f.icon}"></i> ${f.name}</div>
            <div>${f.value}</div>
          </div>
        `).join('');

        // Apartment HTML
        const apartmentHTML = `
          <div class="app-container">
            <div class="left-side-container">
                  <span class="apartment">${apt.type[0]}</span>
    <span class="size">${apt.type[1]}</span>
    <span class="bedrooms">${apt.type[2]}</span>
              <div class="descripe-table">${featuresHTML}</div>
              <div class="area">
                <p>Internal: ${apt.area.internal} m²</p>
                <p>External: ${apt.area.external} m²</p>
                <p>Total: ${apt.area.total} m²</p>
              </div>
            </div>
            <div class="img-container">
              <img class="bedroom-img" src="${apt.image}" alt="">
            </div>
          </div>
        `;
          container.innerHTML = apartmentHTML;
      });
