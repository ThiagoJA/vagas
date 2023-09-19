function updateCount(type) {
  const currentStickersCount = document.getElementById("stickers-count");
  let count = parseInt(currentStickersCount.value);

  if (type === "increment") {
    count++;
  } else if (type === "decrement" && count > 0) {
    count--;
  }

  currentStickersCount.value = count;
}
