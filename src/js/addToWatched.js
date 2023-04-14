import moviesService from "./movies-service";

let moviesAddWatched = [];
  
export async function onAddW(currentMovieId) {

  const addWatchedBtn = document.querySelector('.btn-add-watched');
  
  const W_KEY = 'movies in watched';
  const movie = await moviesService.fetchFullInfoMovie(currentMovieId);
  

  const movieChecked = localStorage.getItem(W_KEY);
  const watched = load(W_KEY);

    // якщо сховище порожнє - пушимо об'єкт в масив
   
    if (movieChecked === null) {
        moviesAddWatched.push(movie);
      save(W_KEY, moviesAddWatched);
     addWatchedBtn.textContent = 'remove from watched';
  }
    //якщо є дані - перевіряємо, чи є там айді фільму
    else if (movieChecked !== null) {
      
    
      if (movieChecked.includes(currentMovieId)) {
          if (moviesAddWatched.length === 1 && watched.length === 1) {
            localStorage.removeItem(W_KEY);
            moviesAddWatched = [];
            addWatchedBtn.textContent = 'add to watched';
        }
          else {

              //шукаємо фільм за індексом, видаляємо з масиву та перезаписуємо
                    let indexM = watched.map(el => el.id).indexOf(Number(currentMovieId));
          
            watched.splice(indexM, 1);
            moviesAddWatched = watched;
            save(W_KEY, watched);
            addWatchedBtn.textContent = 'add to watched';
        }
        
        }
        else {
            //якщо фільму немає, пушимо в масив та перезаписуємо
            watched.push(movie);  
        save(W_KEY, watched);
        addWatchedBtn.textContent = 'remove from watched';
       
      }
    }
  
    
  
           }

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

    const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

