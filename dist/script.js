 function toggleSideBar() {
    const nav = document.getElementById('mobile-nav');
    nav.classList.toggle('sideBarShow');
  }

  document.querySelector('input[name="time"]').value = new Date().toISOString();