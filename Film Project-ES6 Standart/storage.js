class Storage{
    static addFilmToStorage(newFilm){
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
        /*
        [
            {title : "dkfflksjf", director : "kjfldsjfs", url : "56545121"}
            {title : "dkfflksjf", director : "kjfldsjfs", url : "56545121"}
        ]
        */
    
        localStorage.setItem("films",JSON.stringify(films));
    }  
    static getFilmsFromStorage(){
        let films;
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    }
    static deleteFilmFromStorage(FilmTitle){
        let films = this.getFilmsFromStorage();
        //Splice
        films.forEach(function(film,index){
            if(film.title === FilmTitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    
    }
    static clearAllFilmsStorage(){
        localStorage.removeItem("films");
    }
    
}



