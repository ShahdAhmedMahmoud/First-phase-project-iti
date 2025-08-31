fetch("data/header.json")
  .then((res) => res.json())
  .then((data) => {
    const header = data.header;

    const headerHTML = `
      <header class="bg-[#0d1918] text-white py-3 px-4 md:py-[15px] md:px-[40px] flex justify-between items-center relative">
        <!-- Social Icons -->
        <div class="flex gap-5 ml-0 md:ml-[50px]">
          ${header.social
            .map(
              (s) =>
                `<a class="text-white transition-transform duration-300 hover:scale-125 hover:text-[#9acd32]" href="${s.link}">
                  <i class="${s.icon}"></i>
                </a>`
            )
            .join("")}
        </div>

        <!-- Logo -->
        <div class="font-bold text-[28px] text-center flex-1 relative ">
          ${header.logo}
        </div>

        <!-- Menu Button -->
        <div id="${header.menuButton.id}" 
             class="bg-[#9acd32] text-black w-10 h-10 mr-0 md:mr-10 flex justify-center items-center rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110">
          <i class="${header.menuButton.icon}"></i>
        </div>
      </header>
    `;

    document.getElementById("header").innerHTML = headerHTML;
    // Add click functionality to the menu button
    const menuBtn = document.getElementById(header.menuButton.id);
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        localStorage.setItem("lastPage", window.location.href);
        window.location.href = header.menuButton.link;
      });
    }
  });
