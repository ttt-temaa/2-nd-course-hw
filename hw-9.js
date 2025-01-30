document.addEventListener("DOMContentLoaded", () => {
    // Задание 1: Скрытие и показ заголовка
    const title = document.querySelector("#title");
    const toggleButton = document.querySelector("#toggle-title");

    toggleButton.addEventListener("click", () => {
        if (title.style.display === "none") {
            title.style.display = "block";
            toggleButton.textContent = "Скрыть";
        } else {
            title.style.display = "none";
            toggleButton.textContent = "Показать";
        }
    });

    // Задание 2: Изменение цвета текста
    const paragraph = document.querySelector("#paragraph");
    const colorButton = document.querySelector("#change-color");

    colorButton.addEventListener("click", () => {
        paragraph.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

    // Задание 3: Изменение текста заголовка
    const changeableTitle = document.querySelector("#changeable-title");
    const changeTextButton = document.querySelector("#change-text");

    changeTextButton.addEventListener("click", () => {
        changeableTitle.textContent = "Привет, мир!";
    });

    // Задание 4: Изменение текста всех элементов с классом description
    const changeDescriptionButton = document.querySelector("#change-description");

    changeDescriptionButton.addEventListener("click", () => {
        document.querySelectorAll(".description").forEach(el => {
            el.textContent = "Измененный текст";
        });
    });

    // Задание 5: Изменение текста всех description через querySelectorAll
    document.querySelectorAll(".description").forEach(el => {
        el.textContent = "Новый текст";
    });

    // Задание 6: Добавление нового элемента
    const addParagraphButton = document.querySelector("#add-paragraph");

    addParagraphButton.addEventListener("click", () => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Новый абзац";
        document.body.appendChild(newParagraph);
    });

    // Задание 7: Удаление первого элемента с классом description
    const removeDescriptionButton = document.querySelector("#remove-description");

    removeDescriptionButton.addEventListener("click", () => {
        const firstDescription = document.querySelector(".description");
        if (firstDescription) {
            firstDescription.remove();
        }
    });
});
