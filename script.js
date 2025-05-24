// Переключение темы
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
let isDarkTheme = false;

themeToggle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;
  body.classList.toggle('dark-theme', isDarkTheme);
  body.classList.toggle('light-theme', !isDarkTheme);
  themeToggle.textContent = isDarkTheme ? '☀️ Светлая тема' : '🌙 Темная тема';
});

// Данные о кладах
const treasures = [
  {
    note: "One, two, three, a bear lies within me. Head north, you will see.",
    location: "Cedar Rapids",
    image: "https://cdn.discordapp.com/attachments/1375778485414400080/1375781256905625731/image.png?ex=6832efa4&is=68319e24&hm=252988bfb96cdba7ff357bb8e63377f70ce6d468c0d537355f2c6007e142a31d&  ",
    images: [
      "https://cdn.discordapp.com/attachments/1375778485414400080/1375783614775562372/image.png?ex=6832f1d6&is=6831a056&hm=70436bd493b0dd42e8bc58bad8764fd6bdd91f32010b88ed772d1bf39d13829f&  ",
      "https://cdn.discordapp.com/attachments/1375778485414400080/1375783626494709770/image.png?ex=6832f1d9&is=6831a059&hm=4df82f4c382b32d36187120f870b08488525025454063e5fa38c7f5ea0ec1c35&  ",
      "https://cdn.discordapp.com/attachments/1375778485414400080/1375783632547086446/image.png?ex=6832f1da&is=6831a05a&hm=2169965b8e03ad7abbed3e5963eab7423e5c4dcea481b00f9eb5d394ca3ca658&  ",
    ],
  },
  // Добавьте остальные данные аналогично...
];

// Поиск и отображение результатов
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  resultsContainer.innerHTML = '';

  if (!query) return;

  const filtered = treasures.filter((item) =>
    item.note.toLowerCase().includes(query)
  );

  filtered.forEach((item) => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('result-item');

    resultItem.innerHTML = `
      <img src="${item.image}" alt="${item.location}">
      <div class="overlay">${item.location}</div>
    `;

    resultItem.addEventListener('click', () => openModal(item));
    resultsContainer.appendChild(resultItem);
  });
});

// Модальное окно
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImages = document.getElementById('modal-images');
const modalClose = document.getElementById('modal-close');

function openModal(item) {
  modalTitle.textContent = item.location;
  modalImages.innerHTML = '';

  item.images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    modalImages.appendChild(imgElement);
  });

  modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});