const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const copyLink = document.getElementById('copyLink');

openPopup.addEventListener('click', function () {
    popup.classList.remove('hidden');
});

closePopup.addEventListener('click', function () {
    popup.classList.add('hidden');
});

copyLink.addEventListener('click', function () {
    // Logika untuk menyalin alamat ke clipboard
    const textToCopy = 'Alamat yang akan disalin';
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
});
