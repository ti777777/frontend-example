export const setAlert = (element: HTMLElement) => {
  const clickListener = (event: Event) => {
    event.stopImmediatePropagation()
    console.log((event.currentTarget as HTMLElement).textContent);
  };

  element.addEventListener("click", clickListener);
};
