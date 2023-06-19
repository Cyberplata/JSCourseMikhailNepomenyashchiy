
//6.4 Свойства html-элементов
$0
<a href="/ru/docs/Web/API/Document_Object_Model/Introduction">REST API</a>


//   1) innerText - есть свойство с помощью которого мы можем прочитать текст, который есть внутри и не только прочитать, а поменять его.

const anchor = $0
anchor.innerText // 'Введение'

anchor.innerText = "REST API" //'REST API'

anchor
<a href=​"/​ru/​docs/​Web/​API/​Document_Object_Model/​Introduction">​REST API​</a>​

const p = $0
p.innerText //'REST API'


//   2) innerHTML - будет отличаться от innerText тем, что он будет содержать все html теги, которые там были.
const p1 = $0
p1.innerHTML
/* 
'Объектная Модель Документа (DOM) является программным интерфейсом для HTML, XML и SVG документов. 
Это обеспечивает структурированное представление документа (дерева), и определяет способ, по которому структура может быть доступна для программы, для изменения структуры документа, его стиля и содержания. DOM обеспечивает представление документа в виде структурированной группы узлов и объектов, которые имеют свойства и методы. По сути, она связывает веб -страницы со скриптами или языками программирования.'
*/


const p1 = $0
p1.innerHTML
/*'<strong>Объектная Модель Документа (<em>DOM</em>)</strong> является программным интерфейсом для HTML, XML и SVG документов. 
Это обеспечивает структурированное представление документа (дерева), и определяет способ, по которому структура может быть доступна
для программы, для изменения структуры документа, его стиля и содержания. DOM обеспечивает представление документа в виде 
структурированной группы узлов и объектов, которые имеют свойства и методы. По сути, она связывает веб -страницы со скриптами 
или языками программирования.' 
*/


//Кроме влияния на содержание мы можем работать с атрибутами

   // 3) getAttribute - дай мне атрибут и получу его значение

const a = $0; // 
a //<a href=​"/​ru/​docs/​Web/​API/​Attr">​…​</a>​<code>​Attr​</code>​</a>​
a.getAttribute('href') //'/ru/docs/Web/API/Attr'
a.getAttribute('target') //null

   // 4) setAttribute - если хотим устанавливать новое значение (2 параметра принимает: 1ое аттрибут которые принимает
   //                                                                                   2ое значение это то которое хотим назначить)

a.setAttribute('target', '_blank') // <a href="/ru/docs/Web/API/Attr" target="_blank"><code>Attr</code></a>

// Есть способ обращения к атрибуту проще, т.к элемент это объект у него есть свойства и одно из них href =>

a.href // "https://developer.mozilla.org/ru/docs/Web/API/Attr"

a.href = '/404'
a.href; // "https://developer.mozilla.org/404"

// Есть атрибут className 
a.className; // если нет class="link", то в html сначала прописываем, а потом в js вызываем a.className
// "link"

// Кроме className есть атрибут применим к html тегу label =>
label.htmlFor

// Также можно манипулировать с цветами CSS

a.style // получаем с точки зрения js объект со всевозможными свойствами
// CSSStyleDeclaration{"accentColor": "",..., "zoom": ""}

a.style.color = "orange" // пускай моя ссылка будет оражевым цветом
a.style.display = "none" // наша ссылка становится невидимой
a.style.display = "inline"  // отображает обратно нашу ссылку


// data-элементы с префиксом data-id / data-color... их может быть в html в любом количестве. Как получать к ним доступ?
// <a href="/404" target="_blank" class="link" style="color: orange; display: inline;" data-id="1" data-color="color"><code>Attr</code></a>
// Через getAttribute

a.getAttribute('data-id') // "1"
a.setAttribute('data-id', '6') // <a href="/404"data-id="6" data-color="color"><code>Attr</code></a>


// Таже для работы с data-атрибутами хранятся в специальной коллекции .dataset = >
a.dataset; // DOMStringMap {id: '6', color: 'color'}
a.dataset.id; // "6"
a.dataset.id = 108 // "108"