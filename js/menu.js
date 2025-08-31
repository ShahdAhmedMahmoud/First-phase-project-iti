// Function to go back to the last visited page
function goBack() {
  const lastPage = localStorage.getItem("lastPage");
  if (lastPage) {
    window.location.href = lastPage; // Redirect to the last page
  } else {
    window.location.href = "../index.html"; // Fallback to home page
  }
}

// Fetch menu data from JSON
fetch("data/menu.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("menu"); // Use the correct container
    const menu = data.menu;

    // Generate menu HTML
    container.innerHTML = `
      <!-- Close Button -->
      <div class="relative w-full min-h-screen bg-[#212620] p-6 md:p-10">
      <div class="absolute top-3 right-3 md:right-24 bg-[#9acd32] w-10 h-10 flex items-center justify-center cursor-pointer rounded active:scale-90">
        <a href="${
          menu.closeButton.link
        }" onclick="goBack()" class="text-black text-2xl">
          <i class="${menu.closeButton.icon}"></i>
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-16 md:mt-24 ml-4 md:ml-16 flex flex-col gap-4 md:gap-5 text-xl md:text-2xl font-medium">
        ${menu.links
          .map(
            (link) =>
              `<a href="${link.href}" class=" text-white hover:text-[#9acd32] transition duration-300 ease-in-out">${link.label}</a>`
          )
          .join("")}
      </nav>

      <!-- Bottom Info Section -->
      <div class="absolute bottom-5 left-4 md:left-16 w-[90%] text-sm md:text-base">
        <div class="flex flex-col md:flex-row items-start md:items-start gap-6 md:gap-10 relative z-10">
          
          <!-- Logo & Address / Social -->
          <div class="space-y-2">
            <img src="${
              menu.logo
            }" alt="Logo" class="w-8 md:w-10 mb-4 md:mb-6" />
            <p class="text-white"><i class="fa-solid fa-house text-[#9acd32]"></i> ${
              menu.bottomInfo.address
            }</p>
            <p class="text-white"><i class="fas fa-envelope text-[#9acd32]"></i> ${
              menu.bottomInfo.email
            }</p>
            <p class="mt-4 md:mt-7 text-white text-lg md:text-xl">Follow us:</p>
            <div class="flex gap-4 text-lg md:text-xl">
              ${menu.bottomInfo.socials
                .map(
                  (s) =>
                    `<a href="${s.link}" class="text-[#9acd32] hover:text-white transition"><i class="${s.icon}"></i></a>`
                )
                .join("")}
            </div>
          </div>

          <!-- Call / Description / Copyright -->
          <div class="space-y-4 md:space-y-6">
            <p class="text-[#9acd32] text-lg md:text-xl font-semibold">CALL US</p>
            <p class="text-[#9acd32]"><i class="fas fa-phone mr-2"></i>&#124; ${
              menu.bottomInfo.phone
            }</p>
            <p class="text-gray-300 text-sm md:text-base pt-2">${
              menu.bottomInfo.description
            }</p>
            <p class="text-[#9acd32] mb-3 text-xs md:text-sm pt-2">${
              menu.bottomInfo.copyright
            }</p>
          </div>
        </div>

        <!-- Background Text -->
        <div class="absolute inset-0 flex items-center justify-center text-4xl md:text-[173px] font-bold text-white opacity-20">
          ${menu.backgroundText}
        </div>
      </div>
      </div>
    `;
  })
  .catch((err) => console.error("Failed to load menu.json:", err));
