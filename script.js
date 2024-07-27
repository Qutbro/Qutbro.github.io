let score = 0;

document.getElementById('deck').addEventListener('click', function() {
    const deckContainer = document.getElementById('deck-container');
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Установка случайного цвета для новой карты
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    newCard.style.backgroundColor = randomColor;
    deckContainer.appendChild(newCard);

    // Установка случайного направления вращения
    const isClockwise = Math.random() >= 0.5;
    const rotationAnimation = isClockwise ? 'rotate-clockwise' : 'rotate-counterclockwise';
    const animationDuration = 2; // Продолжительность анимации в секундах

    // Случайное направление для анимации (выход за пределы экрана)
    const randomAngle = Math.random() * 2 * Math.PI;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const distance = Math.max(screenWidth, screenHeight) * 1.5; // Увеличиваем расстояние для выхода за пределы экрана

    const translateX = Math.cos(randomAngle) * distance;
    const translateY = Math.sin(randomAngle) * distance;

    // Применение анимации вращения и перемещения
    requestAnimationFrame(() => {
        newCard.style.transition = `transform ${animationDuration}s ease-out`;
        newCard.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${isClockwise ? 360 : -360}deg)`;
    });

    // Увеличение счётчика
    score++;
    document.getElementById('score').textContent = `Очки: ${score}`;

    // Удаление карты после анимации
    newCard.addEventListener('transitionend', () => {
        newCard.remove();
    });

    // Уменьшение скорости вращения по мере приближения к краю экрана
    
});
