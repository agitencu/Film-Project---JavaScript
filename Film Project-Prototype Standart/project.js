const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI objesini başlatma
const ui = new UI();

//Storage objesi Üret
const storage = new Storage();

//Tüm eventleri yükleme
addEventListeners();

function addEventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //Hata
        ui.displayMessages("Tüm alanları doldurunuz...","danger");
    }
    else{
        //Yeni film
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Arayüze film ekleme
        storage.addFilmToStorage(newFilm); //Storage'e film ekleme
        ui.displayMessages("Film başarıyla eklendi.","success");    
    }




    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();// submit edilmesini önlemek için
}
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessages("Silme işlemi başarılı.","success");
    }
}

function clearAllFilms(e){
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
    
}
