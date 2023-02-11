function menuPage() {
        //creates the text section
        const about1 = document.getElementById('about1').innerHTML = "Our Menu is curated daily by Chef Doug Gibs";     
        const about2 = document.getElementById('about2').innerHTML = "We can change the courses based on dietary restrictons if you let us know beforehand";


        const about = document.getElementById('about');
        const chefKiss = document.createElement('img');
        chefKiss.setAttribute('id','chefKiss')
        chefKiss.src = './assets/chef.jpg';
        about.appendChild(chefKiss);        

}

export default menuPage;