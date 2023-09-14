"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4*a*c;
  
  if (discriminant < 0) {
    return arr; // Нет корней, возвращаем пустой массив
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root); // Один корень, добавляем в массив
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2); // Два корня, добавляем оба в массив
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Проверяем, что все параметры являются числами
    if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
        return false;
    }

    // Проверяем, что параметры не отрицательны
    if (percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) {
        return false;
    }

    // Преобразуем процентную ставку и подготавливаем переменные
    let monthlyPercent = percent / 100 / 12;
    let totalAmount = 0;

    // Рассчитываем тело кредита
    let creditBody = amount - contribution;

    // Если тело кредита нулевое, клиент не должен ничего платить
    if (creditBody === 0) {
        return totalAmount;
    }

    // Рассчитываем ежемесячный платеж
    let monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths)) - 1));

    // Рассчитываем общую сумму
    totalAmount = monthlyPayment * countMonths;

    return Number(totalAmount.toFixed(2)); // Округляем до двух знаков после запятой
}






