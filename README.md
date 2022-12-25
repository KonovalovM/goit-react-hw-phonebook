**Read in other languages: [Українська](README.md), [Polska](README.pl.md),
[English](README.en.md), [Spanish](README.es.md).**

# React homework template

Цей проект створений за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
та налаштування додаткових можливостей
[зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Подготовка нового проекта

1. Переконайтеся, що на комп'ютері встановлено LTS-версія Node.js.
   [Скачай і встанови](https://nodejs.org/en/) якщо необхідно.
2. Клонуй цей репозиторій.
3. Зміни імя папки з `goit-react-hw-phonebook` на імя свого проекту.
4. Створи новий порожній репозиторій на GitHub.
5. Відкрий проект у VSCode, запусти термінал та зв'яжи проект з GitHub-репозиторієм
   [по інструкції](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встанови базові залежності проекта командою `npm install`.
7. Запусти режим розробки, вконавши команду `npm start`.
8. Перейди в браузері за адресою [http://localhost:3000](http://localhost:3000).
   Ця сторінка автоматично перезавантажуватиметься після збереження змін у
   файлах проекту.

## Деплой

Продакшн версія проекту автоматично проходитиме лінтинг, збиратиметься і
деплоїтися на GitHub Pages, у гілку `gh-pages`, щоразу коли оновлюється
гілка `main`. Наприклад, після прямого пуша або прийнятого пул-реквесту. Для цього
необхідно у файлі `package.json` відредагувати поле `homepage`, замінивши
`your_username` та `your_repo_name` на свої, і відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) 
і виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього комміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується складання та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, складання або деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікна, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися
за адресою вказаною у відредагованій властивості `homepage`. Наприклад, ось
посилання на живу версію для цього репозиторію
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Якщо відкриється порожня сторінка, переконайтеся, що у вкладці `Console` немає помилок
пов'язаних з неправильними шляхами до CSS та JS файлів проекту (**404**). Швидше
всього в тебе неправильне значення властивості `homepage` у файлі `package.json`.

### Маршрутизація

Якщо програма використовує бібліотеку `react-router-dom` для маршрутизації,
необхідно додатково налаштувати компонент `<BrowserRouter>`, передавши в пропі
'basename' - точна назва твого репозиторію. Зліши на початку та в кінці рядка
обов'язкові.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## Як це работить

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторія, запускається спеціальний
   скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та складання перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   вирушає у гілку `gh-pages`. В іншому випадку, у логу виконання
   скрипт буде вказано в чому проблема.
