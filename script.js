
document.addEventListener('DOMContentLoaded', function () {
    const unitOptions = document.querySelectorAll('.unit-option');

    unitOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            if (e.target.tagName === 'SELECT') return;
            option.querySelector('input').checked = true;
            unitOptions.forEach(opt => {
                if (opt !== option) {
                    opt.querySelector('input').checked = false;
                }
            });
        });
    });
});
