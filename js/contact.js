fetch("data/contact.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("contact");

    // --- MAIN IMAGE ---
    const mainImageHTML = `
      <img src="${data.mainImage.src}" alt="${data.mainImage.alt}" class="${data.mainImage.class}"/>
    `;

    // --- CONTACT FORM ---
    const inputsHTML = data.contactSection.form.inputs
      .map(
        (i, idx) => `
          <div class="input-wrapper">
            <input id="input-${idx}" type="${i.type}" placeholder="${i.placeholder}" class="w-full py-3 px-1 my-2 border-0 border-b border-[#8c8585] bg-transparent focus:outline-none"/>
            <span class="error-message text-red-500 text-sm mt-1 block min-h-[1.25rem]"></span>
          </div>
        `
      )
      .join("");

    const textareaHTML = `
      <div class="input-wrapper">
        <textarea id="textarea-0" placeholder="${data.contactSection.form.textarea.placeholder}" class="w-full py-3 px-1 my-2 border-0 border-b border-[#8c8585] bg-transparent focus:outline-none resize-none h-[100px]"></textarea>
        <span class="error-message text-red-500 text-sm mt-1 block min-h-[1.25rem]"></span>
      </div>
    `;

    const contactHTML = `
      <div class="bg-white w-[90%] max-w-[1200px] mx-auto my-8 md:my-[50px] p-5 md:p-[50px] flex justify-between gap-8 md:gap-[60px] flex-col md:flex-row">
        <div class="md:flex-[1.2]">
          <h2 class="text-[26px] mb-5">
            ${data.contactSection.title.replace(
              data.contactSection.highlight,
              `<span class="text-[#9acd32]">${data.contactSection.highlight}</span>`
            )}
          </h2>
          <p class="text-sm mb-5 mt-[70px] leading-relaxed text-[#555]">
            ${data.contactSection.description}
          </p>

          <form id="contact-form" class="contact-form">
            ${inputsHTML}
            ${textareaHTML}

            <label class="mt-[14px] p-[34px] border-2 border-dashed border-[#cfcfcf] text-[#6b6b6b] flex items-center gap-3 cursor-pointer">
              <input type="file" id="file-input" hidden />
              <span class="inline-flex w-7 h-7 items-center justify-center border border-[#cfcfcf] rounded-md text-[20px]">
                ${data.contactSection.form.fileUpload.icon}
              </span>
              <span class="text-center">${
                data.contactSection.form.fileUpload.label
              }</span>
            </label>

            <div class="mt-3">
              <label class="text-sm flex items-center gap-2">
                <input type="checkbox" id="nda-checkbox" class="size-4 accent-[#9acd32] cursor-pointer"/>
                ${data.contactSection.form.checkbox.label}
              </label>
              <span class="error-message text-red-500 text-sm mt-1 block min-h-[1.25rem]"></span>
            </div>

            <button id="submit-btn" class="w-full md:w-[90%] h-[50px] bg-[#0e1b1b] text-white px-8 py-3 rounded font-bold mt-4 transition-colors duration-300 hover:bg-[#9acd32] hover:text-black cursor-pointer" type="${
              data.contactSection.form.submit.type
            }">
              ${data.contactSection.form.submit.label}
            </button>
          </form>
        </div>

        <div class="flex-1 mt-6 md:mt-[60px] relative z-0 after:hidden md:after:block after:content-[''] after:absolute md:after:top-[-40px] md:after:left-[250px] md:after:right-[-60px] md:after:bottom-[330px] after:bg-[#90b300] after:-z-10">
          <img src="${data.map.src}" alt="${data.map.alt}" class="${
      data.map.class
    }"/>
        </div>
      </div>
    `;
    fetch("/Footer/footer.json")
      .then((res) => res.json())
      .then((data) => {
        const container = document.getElementById("footer");
        const footer = data.footer;

        // Socials
        const socialHTML = footer.contact.socials
          .map(
            (s) => `
          <a href="${s.link}" target="_blank">
            <i class="fa-brands fa-${s.platform}"></i>
          </a>
        `
          )
          .join("");

        // Links
        const linksHTML = footer.links
          .map(
            (l) => `
          <a class="a-links" href="#"><p class="p-links">${l}</p></a>
        `
          )
          .join("");

        // Instagram section
        const instaHTML = `
          <h2>INSTAGRAM</h2>
          <div class="insta-photos">
            ${footer.instagram
              .slice(1)
              .map(
                (img) => `   
              <img class="photos" src="${img}" alt="">
            `
              )
              .join("")}
          </div>
        `;

        // Call section
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

            <div class="down-footer">
              <img class="down-footer-img" src="/home-images/Footer-down.jpg" alt="">

              <!-- Container 1: Contact -->
              <div class="down-container-1">
               <img class="arthouse-img" src="/home-images/arthouse.png">
                <p><i class="fa-solid fa-house icon-1"></i> ${footer.contact.address}</p>
                 <p><i class="fa-solid fa-envelope icon-1"></i> ${footer.contact.email}</p>
                <p>Follow us:</p>
                <div class="logos">${socialHTML}</div>
              </div>

              <!-- Container 2: Links -->
              <div class="down-container-2">${linksHTML}</div>

              <!-- Container 3: Instagram -->
              <div class="down-container-3">${instaHTML}</div>

              <!-- Container 4: Call Section -->
              ${callHTML}
            </div>
          </footer>
        `;

        container.innerHTML = footerHTML;

        // Hover effects for social icons
        const icons = document.querySelectorAll(".logos i");
        icons.forEach((icon) => {
          icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.3)";
          });
          icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
          });
        });

        // Hover effects for Instagram photos
        const photos = document.querySelectorAll(".insta-photos img");
        photos.forEach((photo) => {
          photo.addEventListener("mouseover", () => {
            photo.style.transform = "scale(1.2)";
          });
          photo.addEventListener("mouseout", () => {
            photo.style.transform = "scale(1)";
          });
        });
      });

    container.innerHTML = mainImageHTML + contactHTML;

    // --- VALIDATION ---
    const formEl = document.getElementById("contact-form");
    const textInputs = formEl.querySelectorAll(
      "input[type=text], input[type=email], textarea"
    );
    const fileInput = document.getElementById("file-input");
    const checkbox = document.getElementById("nda-checkbox");

    function showError(el, msg) {
      const errorSpan = el.parentElement.querySelector(".error-message");
      if (errorSpan) errorSpan.innerText = msg;
      el.classList.add("border-red-500");
    }

    function clearError(el) {
      const errorSpan = el.parentElement.querySelector(".error-message");
      if (errorSpan) errorSpan.innerText = "";
      el.classList.remove("border-red-500");
    }

    function showSuccessMessage() {
      const successDiv = document.createElement("div");
      successDiv.className =
        "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50";
      successDiv.innerHTML = `<div class="flex items-center gap-2"><i class="fas fa-check-circle"></i><span>Form submitted successfully!</span></div>`;
      document.body.appendChild(successDiv);
    }

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      // Validate text inputs and textarea
      textInputs.forEach((input) => {
        if (input.value.trim() === "") {
          showError(input, "This field is required");
          valid = false;
        } else {
          clearError(input);
        }
      });

      // Validate file input
      if (fileInput.files.length === 0) {
        alert("You must upload a file");
        valid = false;
      } else {
        clearError(fileInput);
      }

      // Validate checkbox
      if (!checkbox.checked) {
        alert("You must accept to protect your data");
        valid = false;
      } else {
        clearError(checkbox);
      }

      if (valid) {
        showSuccessMessage();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  });
