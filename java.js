// Controleer of de gebruiker al heeft geaccepteerd
if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
  
  document.getElementById('accept-cookies').onclick = function() {
    // Sla op dat de gebruiker cookies heeft geaccepteerd
    localStorage.setItem('cookiesAccepted', 'true');
    // Verberg de cookie-melding
    document.getElementById('cookie-banner').style.display = 'none';

  }

  


  // Haal de knop op en voeg een eventlistener toe
document.getElementById('toggle-theme').onclick = function() {
    // Voeg of verwijder de 'dark-mode' klasse van het body-element
    document.body.classList.toggle('dark-mode');
    
    // Verander het icoon van de knop op basis van de modus
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('toggle-theme').textContent = isDarkMode ? '🌞' : '🌙';  // Zon voor licht en maan voor donker
}

// Haal de knop op en voeg een eventlistener toe
document.getElementById('toggle-theme').onclick = function() {
    // Voeg of verwijder de 'dark-mode' klasse van de body
    document.body.classList.toggle('dark-mode');
    
    // Verander het icoon van de knop op basis van de modus
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('toggle-theme').textContent = isDarkMode ? '🌞' : '🌙';  // Zon voor licht en maan voor donker
    
    // Log naar de console welke modus is geactiveerd
    if (isDarkMode) {
        console.log("Donkere modus geactiveerd.");
        localStorage.setItem('theme', 'dark'); // Sla de voorkeur op
    } else {
        console.log("Lichte modus geactiveerd.");
        localStorage.setItem('theme', 'light'); // Sla de voorkeur op
    }
}

// Controleer de opgeslagen voorkeuren bij het laden van de pagina
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggle-theme').textContent = '🌞'; // Zet het icoon op zon
    console.log("Donkere modus is ingeschakeld bij het laden van de pagina.");
} else {
    console.log("Lichte modus is ingeschakeld bij het laden van de pagina.");
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  // Selecteer de hamburgerknop en het navigatiemenu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Voeg een klikgebeurtenis toe aan de hamburgerknop
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Schakel de 'active'-klasse in/uit
});






