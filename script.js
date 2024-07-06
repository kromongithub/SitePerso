const copyBtns = document.querySelectorAll('.copy-btn');

copyBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const link = btn.parentNode.href;
    navigator.clipboard.writeText(link);
    const notification = document.querySelector('.notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      notification.classList.add('hide');
    }, 2000);
  });
});

const links = document.querySelectorAll('.btn');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (!e.target.classList.contains('copy-btn')) {
      window.location.href = link.href;
    }
  });
});