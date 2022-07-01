const locationButton = document.querySelector('#location');
const locationInput = document.querySelector('#location-input');
const locationTracker = document.querySelector('.action-text--location-tracker');

export const initGeoLocation = () => {
  if (locationButton !== null) {
    locationButton.addEventListener('click', () => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(({ coords }) => {
          locationInput.value = JSON.stringify({ lng: coords.longitude, lat: coords.latitude });
          locationTracker.insertAdjacentHTML('beforeend', `<span class="success-icon"></span>`);
        }, console.error);
      }
    });
  }
};
