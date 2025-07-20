 function getRecipes(meal) {
      req = new XMLHttpRequest();
      req.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
      req.send();

      req.addEventListener("readystatechange", function () {
        if (req.readyState === 4 ) {
           data = JSON.parse(req.response);
           recipes = data.recipes;
           cards = "";

          for (let i = 0; i < recipes.length; i++) {
            cards += `
              <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                  <img src="${recipes[i].image_url}" class="card-img-top" alt="${recipes[i].title}">
                  <div class="card-body">
                    <h5 class="card-title">${recipes[i].title}</h5>
                    <p class="card-text"><strong>Publisher:</strong> ${recipes[i].publisher}</p>
                  </div>
                  <div class="card-footer d-flex justify-content-between">
                    <a href="${recipes[i].source_url}" class="btn btn-primary" target="_blank">Source</a>
                    <a href="${recipes[i].publisher_url}" class="btn btn-secondary" target="_blank">Details</a>
                  </div>
                </div>
              </div>
            `;
          }

          document.getElementById("mypostes").innerHTML = cards;
        }
      });
    }

    
    document.getElementById("pizza").addEventListener("click", () => getRecipes("pizza"));
    document.getElementById("pasta").addEventListener("click", () => getRecipes("pasta"));
    document.getElementById("salad").addEventListener("click", () => getRecipes("salad"));
    window.addEventListener("load", () => getRecipes("pizza"));