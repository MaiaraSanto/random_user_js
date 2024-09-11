// Reload page when clicking the refresh button
const refresh = document.querySelector(".refresh");
refresh.addEventListener("click", function () {
    loadUserData(); // Fetch new data without reloading the page
});

const title_details_ = document.querySelector(".title_details");
const info_icons = document.querySelector(".info_icons");
const user_img = document.querySelector(".user_img");
const title_info = document.querySelector(".title_info");


const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
    });
};


const fetchUserData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?gender=female', {
            cache: 'no-store' 
        });
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};


const loadUserData = async () => {
    const userData = await fetchUserData();

    if (!userData) {
        info_icons.innerHTML = "Error loading data!";
        return;
    }

    
    let imgSrc = `${userData.picture.large}`; 
    let name_ = `${userData.name.first} ${userData.name.last}`;
    let birthDate = new Date(userData.dob.date);
    let formattedBirthDate = `${birthDate.getDate()}/${birthDate.getMonth() + 1}/${birthDate.getFullYear()}`;

    let content_ = `
    <div class="icon user_ active" data-title="Hi, My name is" data-value="${userData.name.first} ${userData.name.last}"></div>
    <div class="icon email_" data-title="My email address is" data-value="${userData.email}"></div>
    <div class="icon birthday_" data-title="My birthday is" data-value="${formattedBirthDate}"></div>
    <div class="icon location_" data-title="My address is" data-value="${userData.location.country}"></div>
    <div class="icon phone_" data-title="My phone number is" data-value="${userData.cell}"></div>
    <div class="icon password_" data-title="My password is" data-value="${userData.login.password}"></div>        
    `;

   
    try {
        const imgElement = await preloadImage(imgSrc);
        user_img.innerHTML = ""; 
        user_img.appendChild(imgElement); 
        imgElement.setAttribute("alt", "User profile picture");
        imgElement.setAttribute("style", "width: 100%; height: auto;"); 
    } catch (err) {
        console.error('Error loading image:', err);
        user_img.innerHTML = "Error loading image!";
    }

    
    info_icons.innerHTML = content_;

    
    title_info.innerHTML = "Hi, My name is";
    title_details_.innerHTML = name_;

    
    const icon = document.querySelectorAll(".icon");

    icon.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            let titleData = item.getAttribute("data-title");
            let dataValue = item.getAttribute("data-value");

            title_info.innerHTML = titleData;
            title_details_.innerHTML = dataValue;

            let activeClass = document.querySelectorAll(".active");

            activeClass.forEach(function (active_) {
                active_.className = active_.className.replace(" active", "");
            });
            item.className += " active";
        });
    });
};


loadUserData();
