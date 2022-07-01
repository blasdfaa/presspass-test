const form = document.querySelector('.survey');
const locationButton = document.querySelector('#location');
const locationInput = document.querySelector('#location-input');
const fileInput = document.querySelector('#file-upload');

const resetForm = () => {
  form.reset();
  locationButton.dataset.valud = false;
  fileInput.value = '';
};

export const initFormValidation = () => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      ...Object.fromEntries(new FormData(form)),
      image: fileInput.value,
      location: JSON.parse(locationInput.value),
    };

    try {
      const response = await fetch('https://6257f69fe4e0b73142841d13.mockapi.io/api/presspass_post', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        resetForm();
        console.log(formData);
        alert('Форма успешно отправлена!');
      } else {
        alert(`Произошла ошибка при отправке формы, \nERROR: ${data}`);
      }
    } catch (error) {
      alert(`Произошла ошибка при отправке формы, \n${error}`);
    }
  });
};
