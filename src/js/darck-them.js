const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', setTheme);

function setTheme() {
  if (
    !document.body.classList.contains('dark', 'muvies__title--isDarkTheme') &&
    checkbox.checked
  ) {
    document.body.classList.add('dark', 'muvies__title--isDarkTheme');
  }
  if (
    document.body.classList.contains('dark', 'muvies__title--isDarkTheme') &&
    !checkbox.checked
  ) {
    document.body.classList.remove('dark', 'muvies__title--isDarkTheme');
  }
}
