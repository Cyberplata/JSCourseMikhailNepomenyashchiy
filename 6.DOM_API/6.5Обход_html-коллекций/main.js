const list1 = document.querySelectorAll('li') //NodeList [...]
list1.forEach(el => el.className = "li")

list1.forEach(el => el.style.display = "none")
list1.forEach(el => el.style.display = 'block')

//Но если бы мы писали через getElementsByTagName
const list2 = document.getElementsByTagName('li') //HTMLCollection
list2.forEach(el => el.style.display = 'none') // Ошибка TypeError: list2 is not a function

// Если работаем со старыми браузерами 
for (let el of list2) {
   el.style.textTransform = 'uppercase';
}
