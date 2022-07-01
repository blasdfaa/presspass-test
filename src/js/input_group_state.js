const inputs = document.querySelectorAll('.input-group__control');

const handleClearInput = (input, button) => {
  input.value = '';
  // Возвращает фокус после очистки (опционально)
  input.focus();
  // Также надо удалить класс и спрятать кнопку
  // Так-как мы слушаем ивент `input`, а очистка по клику на кнопку этот ивент не триггерит
  input.classList.remove('input-group__controll--filled');
  button.style.display = 'none';
};

export const initInputGroupState = () => {
  inputs.forEach((item) => {
    // Что бы вешать новые обработчики на каждый ввод, найдём кнопку здесь
    const clearBtn = item.closest('.input-group').querySelector('.input-group__clear-btn');

    if (clearBtn !== null) {
      clearBtn.addEventListener('click', () => handleClearInput(item, clearBtn));
    }

    item.addEventListener('input', (e) => {
      const field = e.target;

      if (e.target.value) {
        field.classList.add('input-group__controll--filled');

        // Проверка нужна так-как кнопки Очистить может и не быть. Например, у `textarea`
        if (clearBtn !== null) {
          clearBtn.style.display = 'inline-block';
        }
      } else {
        field.classList.remove('input-group__controll--filled');
      }
    });
  });
};
