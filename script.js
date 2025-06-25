//  sidenav javascript starts

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function switchTab(tabId) {
    const sections = document.querySelectorAll('section.page');
    const buttons = document.querySelectorAll('.bottom-nav button');

    sections.forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === tabId) {
            btn.classList.add('active');
        }
    });

    // Optional: Close sidebar after selecting
    toggleSidebar();
}

//  sidenav javascript ends




