import { reactive } from "vue";
export const store = reactive({
    title: "Hello Vue-Laravel!",
    apiURL: "http://localhost:8000/api/",
    imgpath: "http://localhost:8000/storage/",
    isDropDown: false,
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
        link: 'About us',
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
});