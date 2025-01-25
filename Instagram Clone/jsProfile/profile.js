// JavaScript for Profile Page

// Account switch confirmation
const accountSwitch = document.querySelector('.account-switch select');
accountSwitch.addEventListener('change', (event) => {
    const confirmSwitch = confirm("Are you sure you want to switch accounts?");
    if (confirmSwitch) {
        window.location.href = "../login/login.html"; // Redirect to login page
    } else {
        event.target.value = event.target.dataset.current;
    }
});

// Navigate to settings page
const settingsIcon = document.querySelector('.settings img');
settingsIcon.addEventListener('click', () => {
    window.location.href = "settings.html"; // Redirect to settings page
});

// Handle profile stats clicks
const profileStats = document.querySelectorAll('.profile-stats div');
profileStats.forEach((stat) => {
    stat.addEventListener('click', (event) => {
        const type = event.target.dataset.type; // posts, followers, following
        if (type) {
            alert(`Redirecting to ${type} page...`); 
        }
    });
});

// Highlights click navigation
const highlights = document.querySelectorAll('.highlight img');
highlights.forEach((highlight) => {
    highlight.addEventListener('click', () => {
        window.location.href = "story.html"; // Redirect to story page
    });
});

// Posts Tabs
const userPostsTab = document.getElementById('userPostsTab');
const taggedPostsTab = document.getElementById('taggedPostsTab');
const postsContainer = document.getElementById('postsContainer');

userPostsTab.addEventListener('click', () => {
    userPostsTab.classList.add('active'); // Highlight the User Posts tab
    taggedPostsTab.classList.remove('active'); // Remove highlight from Tagged Posts tab
    postsContainer.innerHTML = `
        <div class="post"><img src="https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Post"></div>
            <div class="post"><img src="https://images.unsplash.com/photo-1509233725247-49e657c54213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNofGVufDB8fDB8fHww" alt="Post"></div>
            <div class="post"><img src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Post"></div>
            <div class="post"><img src="https://images.unsplash.com/photo-1587293094245-15c3520d3894?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNodXJjaHxlbnwwfHwwfHx8MA%3D%3D" alt="Post"></div>
            <div class="post"><img src="https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvdGVzfGVufDB8fDB8fHww" alt="Post"></div>
            <div class="post"><img src="https://images.unsplash.com/photo-1701318227064-549c801e4cc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RhZ3JhbSUyMHBvc3RzfGVufDB8fDB8fHww" alt="Post"></div>
    `;
});

taggedPostsTab.addEventListener('click', () => {
    taggedPostsTab.classList.add('active'); // Highlight the Tagged Posts tab
    userPostsTab.classList.remove('active'); // Remove highlight from User Posts tab
    postsContainer.innerHTML = `
        <div class="post"><img src="https://th.bing.com/th/id/OIP.067-HmPMbb805ms7Ghj_oAHaE8?rs=1&pid=ImgDetMain" alt="Tagged Post"></div>
        <div class="post"><img src="https://bloximages.chicago2.vip.townnews.com/pantagraph.com/content/tncms/assets/v3/editorial/1/55/15586f52-79f6-11e6-b446-2bc239c9b644/57d86b2e917a5.image.jpg?resize=1200%2C932" alt="Tagged Post"></div>
        <div class="post"><img src="https://th.bing.com/th/id/OIP.flax71zixZTbb3qZPB_q3gAAAA?rs=1&pid=ImgDetMain" alt="Tagged Post"></div>
        <div class="post"><img src="https://th.bing.com/th/id/R.75c660e15752a075880fe8eeb79a7caf?rik=ccj1HotN1GGJbw&pid=ImgRaw&r=0" alt="Tagged Post"></div>
    `;
});

// Footer navigation
const footerIcons = document.querySelectorAll('.footer .icon img');
footerIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const pages = ['index.html', 'search.html', 'reels.html', 'notifications.html', 'profile.html'];
        window.location.href = pages[index];
    });
});

//change instagram icon for medium sized screen
const instaIcon=document.querySelector('.iconInsta');
window.addEventListener('resize', function(){
    const windowWidth=this.window.innerWidth;
    if(windowWidth > 769 && windowWidth < 1266){
        instaIcon.src="../assetsProfile/icons/icons8-instagram.svg";
        instaIcon.style.height="35px";
        instaIcon.style.width="35px";
    }
    else{
        instaIcon.src="../assetsProfile/icons/instagram-text-icon.svg";
        instaIcon.style.height="70px";
        instaIcon.style.width="100px";
    }
});