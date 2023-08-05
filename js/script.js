let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


const searchWrapper = document.querySelector(".inputBox");
const inputbox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".auto-box");

inputbox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleUpperCase().startsWith(userData.toLocaleUpperCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        searchWrapper.classList.add("active");
    } else {
        searchWrapper.classList.remove("active");
    }
    showSuggestions(emptyArray);
};

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = '';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;

    // Add click event to each list item
    suggBox.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', e => {
            inputbox.value = e.target.textContent;
            searchWrapper.classList.remove("active");
        });
    });
}

function redirectToCountryPage() {
    const countryInput = document.getElementById("country-input");
    const country = countryInput.value.trim().toLowerCase().replace(/\s+/g, '-');
    window.location.href = `${country}.html`;
    return false;
}