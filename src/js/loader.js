function showLoader(container) {
  const loader = document.createElement('span');
  loader.className = 'loader';
  container.appendChild(loader);
}

function hideLoader(container) {
  const loader = container.querySelector('.loader');
  if (loader) {
    container.removeChild(loader);
  }
}
