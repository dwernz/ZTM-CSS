document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControl = document.getElementById('font-size');
    const fontColorControl = document.getElementById('font-color');
    const backgroundColorControl = document.getElementById('background-color');

    fontSizeControl.addEventListener('input', function () {
        document.documentElement.style.setProperty('--font-size', this.value + 'px');
    });

    fontColorControl.addEventListener('input', function () {
        document.documentElement.style.setProperty('--font-color', this.value);
    });

    backgroundColorControl.addEventListener('input', function () {
        document.documentElement.style.setProperty('--background-color', this.value);
    });
});
