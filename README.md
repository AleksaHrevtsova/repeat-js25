1. Подключение скрипта
2. Синтаксис языка инструкция (statement) выражение (expression) свойство метод
   интерфейс - набор свойств и методов
3. строгий режим
4. переменные
5. типы данных ссылочные примитивы приведение типов к числу к строке
6. математические и логические операторы

7. массивы
8. доступ к элементам и длина массива
9. итерация по массиву for & for...of

10. методы массива split('') join('')

indexOf includes

push pop shift unshift

slice splice

concat

16. функции function expression function declaration параметры по умолчанию
    arguments Array.from() arrow functions ...args

17. область видимости
18. ветвления & guard clause
19. циклы
20. break & continue
21. присвоение по ссылке и по значению
22. объекты
23. доступ к свойствам ['key] .key
24. delete
25. отсутствующие св-ва
26. короткие свойства ES6,если совпадает с именем переменной
27. вычисляемые свойства, когда имя ключа должно вычислиться

const key = 'person'; const getKey = function() { return 'age'; };

// Computed properties const object = { [key]: 'Mango', [getKey()]: 2, };

18. методы объекта ES5 oldMethod: fucntion(){ return `hello` } newMethod(){
    return `hi` }

19. деструктуризация объектов

const user = { name: 'Sandra',
    age: 30, height: 172 };

с присвоением нового имени
const { name: userName} = user;

неполная деструктуризация
const { name,
    ...props}

20. деструктуризация массивов
const answers = [1,1,0,1]
const [a, b, c, d] = answers

21. функции-конструкторы

22. прототипы
23. ES6-классы
24. функциональные методы массивов