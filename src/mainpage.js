function home() {
        //sets the innerHTML for the home section 
        const about1 = document.getElementById('about1').innerHTML = "Eclectic Food From Across The Globe";     
        const about2 = document.getElementById('about2').innerHTML = "Tables available by reservation only<br>To make a reservation please call 800-888-1234";

        const removeChef = document.getElementById('chefKiss');
        removeChef.parentNode.removeChild(removeChef);
}

export default home;