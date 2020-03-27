<!-- Внесение изменений -->

1. Изначально нужно клонировать проект к себе на машину командой
   git clone urlFromGithub

urlFromGithub можно получить на https://github.com/winbet-club/winbet-club нажав 'Clone or download'
Если есть желание работать через SSH нужно добавить SSH ключ на GitHub изначально создав его на рабочей машине

В первый раз нужно задать значения email and userName (не нужно менять каждый раз)

git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"

2. После того как проект создан нежно создать новую ветку через команду
   git checkout -b newBranchName

Дефолтной веткой является develop. !!! Разработку на ней лучше не производить !!!

Для запуска локального сервера используем команду
npm start

3. После внесения изменений вводим команду (именно с точной на конце)
   git add .

Точка на конце означает, что вы хотите добавить все измененные файлы

4. После этого команда
   git commit -m 'The text of your commit. What did you do or different pelpfull info'

5. После этого отправляем изменения на GitHub
   git push https://github.com/winbet-club/winbet-club.git newBranchName

Если использовать SSH ссылка будет другая.
Так же можно заменить ссылку на origin - https://help.github.com/en/github/using-git/changing-a-remotes-url

6. Дальше идем на GitHub, создаем 'new pull request'
   base выбираем develop, compare - newBranchName (имя вашей ветки, в которой шла разработка)

7. Проводим rebace нашего pull request. Теперь все последние данные лежат в develop на GItHub
8. Скачиваем наши изменения на локальную машину командой
   git pull https://github.com/winbet-club/winbet-club.git develop

<!-- Создание bundle для внесения данных на хостинг -->

bundle создается командой
npm run build

    БУДЕТ ДОПОЛНЕНО
