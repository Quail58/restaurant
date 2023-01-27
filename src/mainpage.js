function mainPage() {
// grabs the content by id
const things = document.getElementById('content');
//creates the header
const header = document.createElement('div');    
header.setAttribute('id','header');
things.appendChild(header);    
const logo = document.createElement('img');
logo.setAttribute('id','logo');
logo.setAttribute('src','./assets/logo.png');
header.appendChild(logo);
//creates the text section    
about = document.createElement('div');
about.setAttribute('id','about');
content.appendChild(about);
const about_txt = document.createElement('div');
about_txt.setAttribute('id','about_txt');
about.appendChild(about_txt)
const about1 = document.createElement('div');
about1.setAttribute('id','about1');
about_txt.appendChild(about1);
const eclectic = document.createElement('div');
eclectic.innerHTML = 'Eclectic Food From Across The Globe';
about1.appendChild(eclectic);
const about2 = document.createElement('div');
about2.setAttribute('id','about2');    
const table = document.createElement('div');
table.innerHTML = 'Tables available by reservation only';
about2.appendChild(table);
const reservation = document.createElement('div')
reservation.innerHTML = 'To make a reservation please call 800-888-1234';
about2.appendChild(reservation);
about_txt.appendChild(about2);
}

export default mainPage;