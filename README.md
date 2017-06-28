![RGXP.RU](https://archakov.im/uploads/rgxp-logo.svg?1)
=========

Набор готовых регулярных выражений на все случаи жизни 👀
Проект open-source и каждый желающий может помочь развить проект. Задается вопрос: "Как?".

 1. Добавив своих регулярных выражений.
 2. Посоветовать более элегантное решение (по коду).
 3. Поделиться своими идеями по развитию этого проекта (в issues).


 ![](https://archakov.im/uploads/rgxp.png)

## Зачем?
Я отвечу сразу на несколько вопросов - **затем**. Прежде чем реализовать этот проект, я каждый раз сталкивался с одной проблемой. Заходить в гугл и каждый раз копировать те же регулярки с сайта StackOverflow или Toster. (Я ленивый и мне не хотелось каждый раз, новую регулярку сохранять где-нибудь в заметках или в файле, который я обязательно потеряю).

В итоге, было решено создать этот проект - [RGXP.RU](https://rgxp.ru)

## Что использовалось при разработке?

 - **Front end:** ReactJS, Redux.
 - **Back end:** NodeJS, Express, knex.
 - ECMAScript 6 (клиент и сервер).
 - Webpack
 - Stylus

## Как добавить свои регулярные выражения?

Все паттерны содержатся в файле **patterns.json**.

Чтобы добавить свой паттерн, создайте **pull request** соблюдая следующий шаблон:

```json
{
  "title": {
    "en": "Title in english",
    "ru": "Заголовок на русском"
  },
  "description": {
    "en": "Description in english",
    "ru": "Описание на русском"
  },
  "pattern": "<title>(.*?)</title>",
  "placeholder": "<title>My site</title>",
  "tags": "title,html,tags",
  "nickname": "Archakov06"
}
```

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">required</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>title</td>
      <td>object</td>
      <td>yes</td>
      <td>Заголовок. Объект состоящий из двух свойств: **ru** и **en** (string, required).</td>
    </tr>
    <tr>
      <td>description</td>
      <td>object</td>
      <td>yes</td>
      <td>Описание паттерна. Объект состоящий из двух свойств: **ru** и **en** (string, required).</td>
    </tr>
    <tr>
      <td>pattern</td>
      <td>string</td>
      <td>yes</td>
      <td>Регулярное выражения (шаблон).</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>string</td>
      <td>yes</td>
      <td>Подсказка <br>(*в основном, указывается значение соответствующее паттерну*)</td>
    </tr>
    <tr>
      <td>tags</td>
      <td>string</td>
      <td>optional</td>
      <td>Основные тэги вашего паттерна. Указывать через запятую.<br>(*требуется для поиска и категорий*).</td>
    </tr>
    <tr>
      <td>nickname</td>
      <td>string</td>
      <td>optional</td>
      <td>Ваш никнейм от GitHub</td>
    </tr>
    </tbody>
</table>

## Как оповестить о баге или предложить идею?
Вы можете создать issue в разделе
<https://github.com/Archakov06/trycode/issues>. Свяжитесь со мной через GitHub, если у вас есть вопросы, предложения или вы хотите поругать меня за быдлокод. (p.s.: Обратите внимание, что код является качеством beta).

## License

MIT License - Archakov Dennis 2017
