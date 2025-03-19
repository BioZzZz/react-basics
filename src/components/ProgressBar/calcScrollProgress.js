export const calcScrollProgress = () => {
  const offsetHeight = document.documentElement.offsetHeight;
  const clientHeight = document.documentElement.clientHeight;
  const pageYOffset = window.pageYOffset;

  return (pageYOffset / (offsetHeight - clientHeight)) * 100;
};
