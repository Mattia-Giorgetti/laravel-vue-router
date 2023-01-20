import { reactive } from "vue";
export const store = reactive({
    title: "Hello Vue-Laravel!",
    apiURL: "http://localhost:8000/api/",
    imgpath: "http://localhost:8000/storage/",
    isDropDown: false,
    loading: false,
    projectsArray: [],
    navbarLinks: [{
        link: 'Home',
        url: 'home'
    },
    {
        link: 'Projects',
        url: 'projects'
    },
    {
        link: 'Contacts',
        url: 'contact'
    },
    {
        link: 'About',
        url: 'about'
    }],
    footerLinks: [{  
        link: 'Lorem',
        url: '#'    
    },
    {
        link: 'Lorem',
        url: '#'
    },
    {
        link: 'Lorem',
        url: '#'
    },
    {
        link: 'Lorem',
        url: '#'
    },
    {
        link: 'Lorem',
        url: '#'
    },
    {
        link: 'Lorem',
        url: '#'
    },],
    showitems() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("showing");
            } else {
              entry.target.classList.remove("showing");
            }
          });
        });
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((element) => observer.observe(element));
      }
});