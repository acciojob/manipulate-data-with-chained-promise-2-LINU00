function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

getNumbers()
  .then((numbers) => {
    return new Promise((resolve) => {
      const evenNumbers = numbers.filter((num) => num % 2 === 0);
      setTimeout(() => {
        document.getElementById("output").textContent = evenNumbers;
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      const multipliedNumbers = evenNumbers.map((num) => num * 2);
      setTimeout(() => {
        document.getElementById("output").textContent = multipliedNumbers;
        resolve(multipliedNumbers);
      }, 2000);
    });
  });
