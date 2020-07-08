var searchOpen = document.querySelector(".searh-form-btn");
var searchForm = document.querySelector(".search-form");

if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("search-form-hide");
  };

 searchOpen.addEventListener("click", function(event) {
    event.preventDefault();
    searchForm.classList.toggle("search-form-show");
    searchForm.classList.toggle("search-form-hide");
  });
};

