function aboutPage() {
    //creates the text section
    const about1 = document.getElementById('about1').innerHTML = "Thank you for taking interest in our restaurant";     
    const about2 = document.getElementById('about2').innerHTML = "We dont want to reveal too much about our space.<br>Each visit is its own experience.";

    const removeChef = document.getElementById('chefKiss');
    removeChef.parentNode.removeChild(removeChef);
}

export default aboutPage;