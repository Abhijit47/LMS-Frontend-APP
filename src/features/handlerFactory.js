
// Function handle message limit
export const handleMessageLimit = (event, setterFunction, selector = "") => {
  setterFunction(event.target.value.length);
  if (event.target.value.length >= 250) {
    document.querySelector(selector).classList.remove("hidden");
  } else {
    document.querySelector(selector).classList.add("hidden");
  }
};

