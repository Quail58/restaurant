import home from './mainpage.js';
import menuPage from './menu.js';
import aboutPage from './about.js';

//creats the header for the page

function header() {
    // grabs the content by id
    const content = document.getElementById('content');

    //creates the header
    const header = document.createElement('div');    
    header.setAttribute('id','header');
    content.appendChild(header);

        //creates about Tab under header
        const aboutTab = document.createElement('div');
        aboutTab.setAttribute('id', 'tab');
        aboutTab.setAttribute('class','about');
        aboutTab.innerHTML = "About";
        aboutTab.addEventListener("click", aboutPage);
        header.appendChild(aboutTab);

        //creates the logo under header
        const logo = document.createElement('img');
        logo.setAttribute('id','logo');
        logo.src = "./assets/logo.png";
        logo.addEventListener("click", home);
        header.appendChild(logo);

        //creates menu tab under header
        const menuTab = document.createElement('div');
        menuTab.setAttribute('id', 'tab');
        menuTab.setAttribute('class', 'menu');
        menuTab.innerHTML = "Menu";
        menuTab.addEventListener("click", menuPage);
        header.appendChild(menuTab);

    //creates the about sections for content
    const about = document.createElement('div');
    about.setAttribute('id','about');
    content.appendChild(about);

    //creates the sections to add text to in the tabs
    const about_txt = document.createElement('div');
    about_txt.setAttribute('id','about_txt');
    about.appendChild(about_txt);
    const about1 = document.createElement('div');
    about1.setAttribute('id','about1');
    about_txt.appendChild(about1);        
    const about2 = document.createElement('div');
    about2.setAttribute('id','about2');    
    about_txt.appendChild(about2);
}

export default header;