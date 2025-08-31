        fetch('data/portfolio.json')
        .then(res => res.json())
        .then(data =>{
            document.getElementById("tittle").innerHTML = data.tittle;
            document.getElementById("company-icon").src = data.iconUrl;
            document.getElementById("desc1").innerHTML = data.descriptions.description1;
            document.getElementById("desc2").innerHTML = data.descriptions.description2;

            const images = data.images;
            let imagesDiv = document.getElementById("images");
            images.forEach(function(img){
                imagesDiv.innerHTML += `
                    <div class="col-span-1">
                        <img class="img-cards" src="${img}" alt="image">
                    </div>`;
            });

            const amenities = document.getElementById("amenities");
            data.amenities.forEach(function(amen){
                amenities.innerHTML += `<div class="amenitie">
                    <div class="icon mb-4"><i class="${amen.icon}"></i></div>
                    <span style="color: #90B300;">Amenities</span>
                    <h5 class="font-medium text-xl"><u>${amen.name}</u></h5>
                    <p class="mt-10 amenitie-text">${amen.description}</p>
                    </div>`;
            });

        })
        .catch(err => console.error(err));