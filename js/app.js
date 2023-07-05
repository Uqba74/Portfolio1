window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("stickyHeader", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var homeSection = document.getElementById("homeSection");
  var homeActiveBtn = document.getElementById("homeActive");

  var sectionTop = homeSection.offsetTop;
  var sectionHeight = homeSection.offsetHeight;

  if (
    window.pageYOffset >= sectionTop &&
    window.pageYOffset < sectionTop + sectionHeight
  ) {
    homeActiveBtn.classList.add("active");
  } else {
    homeActiveBtn.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  var sections = document.getElementsByClassName("changeNavItemColor");
  var navItems = document.getElementsByClassName("activeOnScroll");

  Array.from(sections).forEach(function (section, index) {
    var sectionTop = section.offsetTop;

    var sectionHeight = section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      navItems[index].classList.add("active");
    } else {
      navItems[index].classList.remove("active");
    }
  });
});
