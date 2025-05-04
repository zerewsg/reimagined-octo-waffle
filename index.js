new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    num < 5 ? reject("Число слишком маленькое: ${num}") : resolve(num);
  })
  .then(num => num * 2)
  .then(result => console.log("Итоговый результат: ${result}"))
  .catch(error => console.error("Ошибка: ${error}"));