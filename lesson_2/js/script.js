// Задача 0. Обчислити значення виразів
function task0()
{
    var a = parseFloat(prompt("Введіть число a", 0));
    var b = parseFloat(prompt("Введіть число b", 0));

    var s1 = a + 12 + b
    var s2 = Math.sqrt((a + b) / (2 * a))
    var s3 = Math.cbrt((a + b) * 2)
    var s4 = Math.sin(a / -Math.abs(b))

    document.write(`S1 = ${s1} <br>`);
    document.write(`S2 = ${s2.toFixed(2)} <br>`);
    document.write(`S3 = ${s3.toFixed(2)} <br>`);
    document.write(`S4 = ${s4.toFixed(2)} <br>`);
}

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
function task1()
{
    var a = parseFloat(prompt("Введіть число a", 0));
    var b = parseFloat(prompt("Введіть число b", 0));
    var sum = a + b;
    var mul = a * b;
    var div = a / b;
    document.write(`<table border="1">
        <tr>
            <td>Сума</td>
            <td>${sum}</td>
        </tr>
        <tr>
            <td>Добуток</td>
            <td>${mul}</td>
        </tr>
        <tr>
            <td>Частка</td>
            <td>${div}</td>
        </tr>
    </table>`);
}

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
function task2()
{
    var year = parseInt(prompt("Введіть рік народження", 0));
    var currentYear = new Date().getFullYear();
    var age = currentYear - year;
    document.write(`Ваш вік: ${age} років`);
}

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
function task3()
{
    var price = parseFloat(prompt("Введіть ціну товару", 0));
    var quantity = parseInt(prompt("Введіть кількість товару", 0));
    var total = price * quantity;
    var vat = total * 0.05;
    document.write(`Загальна вартість: ${total.toFixed(2)} грн. <br>`);
    document.write(`ПДВ: ${vat.toFixed(2)} грн.`);
}

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
function task4()
{
    var length = parseInt(prompt("Введіть довжину в см", 0));
    var meters = length / 100;
    var kilometers = length / 1000;
    document.write(`Довжина в метрах: ${meters} м. <br>`);
    document.write(`Довжина в кілометрах: ${kilometers} км.`);
}

// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
function task5()
{
    var seconds = parseInt(prompt("Введіть кількість секунд", 0));
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - hours * 3600) / 60);
    document.write(`Годин: ${hours} <br>`);
    document.write(`Хвилин: ${minutes}`);
}

// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
function task6()
{
    var price1 = parseFloat(prompt("Введіть ціну товару 1", 0));
    var quantity1 = parseInt(prompt("Введіть кількість товару 1", 0));
    var price2 = parseFloat(prompt("Введіть ціну товару 2", 0));
    var quantity2 = parseInt(prompt("Введіть кількість товару 2", 0));
    var price3 = parseFloat(prompt("Введіть ціну товару 3", 0));
    var quantity3 = parseInt(prompt("Введіть кількість товару 3", 0));
    var total1 = price1 * quantity1;
    var total2 = price2 * quantity2;
    var total3 = price3 * quantity3;
    var total = total1 + total2 + total3;
    document.write(`<table border="1">
        <tr>
            <td>Товар 1</td>
            <td>${price1.toFixed(2)}</td>
            <td>${quantity1}</td>
            <td>${total1.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Товар 2</td>
            <td>${price2.toFixed(2)}</td>
            <td>${quantity2}</td>
            <td>${total2.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Товар 3</td>
            <td>${price3.toFixed(2)}</td>
            <td>${quantity3}</td>
            <td>${total3.toFixed(2)}</td>
        </tr>
        <tr>
            <td colspan="3">Загальна вартість</td>
            <td>${total.toFixed(2)}</td>
        </tr>
    </table>`);
}

// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
function task7()
{
    var month = Math.floor(Math.random() * 12) + 1;
    var day = Math.floor(Math.random() * 7);
    var sum = month + day;
    document.write(`Місяць: ${month} <br>`);
    document.write(`День: ${day} <br>`);
    document.write(`Сума: ${sum}`);
}
