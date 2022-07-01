const imageUploader = document.querySelector('.action-text--image-upload');
const fileInput = document.querySelector('#file-upload');

export const initFileUpload = () => {
  if (fileInput !== null) {
    fileInput.addEventListener('change', (e) => {
      const fileList = e.target.files;
      const file = fileList[0];

      if (file) {
        imageUploader.insertAdjacentHTML('beforeend', `<span class="success-icon"></span>`);
      }
    });
  }
};
