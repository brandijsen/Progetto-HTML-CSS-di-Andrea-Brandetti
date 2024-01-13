/* About: Show content */

window.onload = function () {
    showContent('skills');
}

function showContent(tabId) {
    let tabs = document.querySelectorAll('.tab-content')
    tabs.forEach(function (tab) {
        tab.style.display = 'none'
    })

    let selectedTab = document.getElementById(tabId);
    if(selectedTab) {
        selectedTab.style.display = 'block'
    }
}