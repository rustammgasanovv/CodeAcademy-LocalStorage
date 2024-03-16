// //LocalStorage
// localStorage.setItem('ad', 'Ilkin')
// localStorage.setItem('soyad', 'Akhmedov')
// let name = localStorage.getItem('ad')
// let surname = localStorage.getItem('soyad')
// console.log(name + " " + surname);

// let silmekKey = localStorage.removeItem('ad');
// let herSheyiSilmek = localStorage.clear();


// console.log(localStorage.length);

// //cookies

// document.cookie = "name=Hasan; expires=Thu, 30 Oct 2024 12:00:00 GMT; path=/"
// document.cookie = "surname=Bomba Oqlandir; expires=Thu, 30 Oct 2024 12:00:00 GMT; path=/"

let files = document.getElementById('file');

// files.addEventListener('change', (e)=>{
//     let file = e.target.files[0];
//     console.log(file.name, file.size, file.type);
// })

//multiple

files.addEventListener('change', (e)=>{
    let file = e.target.files;
    for (let i = 0; i<file.lenght; i++){
        console.log(file[i].name);
    }
})