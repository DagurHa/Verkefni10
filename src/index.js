function finnaCoords() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const coordPos = document.querySelector('#coords');
    const takki = document.querySelector('#finna');
  
    mapLink.href = '';
    mapLink.textContent = '';
    coordPos.textContent = '';
  
    function success(position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      takki.classList.add('hidden');
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = 'Staðsetning á korti';
      coordPos.textContent = `Breiddargráða: ${latitude} °, Lengdargráða: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Staðsetning finnst ekki';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Ekki hægt að nota Geolocation';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
}
  
document.querySelector('#finna').addEventListener('click', finnaCoords);
  