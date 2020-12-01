# ID-refunc

Нужно написать алгоритм, который отобразит в консоли весь список файлов.  
Именно файлов.  
.DS_Store игнорируем и не отображаем!

## Что есть
Есть папка внутри проекта "folder".  
В ней куча папок - пустых и не пустых, они могут быть любой глубины.  
Использовать только 2 библиотеки fs и path, они уже подключены.  
.DS_Store игнорируем и не отображаем!

## Чего ждём в консоли 
```
found file: 0.png
found file: smile11.png
found file: smile13.png
found file: smile1-1.png
found file: smile1-2.png
found file: smile1.png
found file: smile21.png
found file: smile32.png
found file: smile33.png
found file: smile34121121.png
found file: smile34121.png
found file: smile3412-1.png
found file: smile3412.png
found file: smile3-1.png
found file: smile3.png
```

## Рекомендованные функции

* fs.readdirSync( путь ) - получение списка объектов в папке
* fs.lstatSync( путь_к_объекту ).isDirectory() - определение папка или не папка этот объект
* path.resolve(путь1, путь2) - удобное объединение путей ( /folder1 + /folder2 = /folder1/folder2/ )

## Что можно сделать "сверху"
Еще можно написать поисковик: мы ищем файл с именем "smile3.png", если он найден, пишется полный путь, если не найден, то пишется, что не найден)