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
