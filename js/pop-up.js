
var searchOpen = document.querySelector(".searh-form-btn");
var searchForm = document.querySelector(".search-form");


  searchOpen.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("search-form-hide");
    searchForm.classList.toggle("search-form-show");
  });
