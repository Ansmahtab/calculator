
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('#screen');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch {
                    screen.value = 'Error';
                }
            } else if (value === 'C') {
                screen.value = '';
            } else if (value === 'DEL') {
                screen.value = screen.value.slice(0, -1);
            } else {
                screen.value += value;
            }
        });
    });
});
