// ==========================================
// PhysioCure Blog Search
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("searchBox");

    const articles = document.querySelectorAll(".cards article");

    searchBox.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        articles.forEach(function(article){

            const title = article.querySelector("h3").textContent.toLowerCase();

            const description = article.querySelector("p").textContent.toLowerCase();

            if(title.includes(keyword) || description.includes(keyword)){

                article.style.display = "block";

            }else{

                article.style.display = "none";

            }

        });

    });

});
