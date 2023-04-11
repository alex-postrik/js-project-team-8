import moviesService from "./movies-service";



let moviesInQueue = [];
  
export async function onAddQ(currentMovieId) {

  
  const Q_KEY = 'movies in queue';
  const movie = await moviesService.fetchFullInfoMovie(currentMovieId);

        moviesInQueue.push(movie);
        save(Q_KEY, moviesInQueue);


    //якщо сховище порожнє - пушимо об'єкт в масив
    // if (localStorage.getItem(Q_KEY) === null) {
    //     moviesInQueue.push(movie);
    //     save(Q_KEY, moviesInQueue);
    // }
    // //якщо є дані - перевіряємо, чи є там айді фільму
    // else if (localStorage.getItem(Q_KEY !== null)) {
    //     const movieCheck = localStorage.getItem(Q_KEY);
    //     if (movieCheck.includes(currentMovieId)) {
              
    //         const queue = load(Q_KEY);
    //         //якщо об'єкт є і він один - видаляємо запис повністю
    //         if (queue.length === 1) {
    //             localStorage.removeItem(Q_KEY);
    //         }
    //       //шукаємо фільм за індексом, видаляємо з масиву та перезаписуємо
    //       let indexM = queue.findIndex(movie => movie.id === currentMovieId);
    //       //видалити за індексом  
    //       queue.splice(indexM, 1);
    //       save(Q_KEY, queue);
    //     }
    //     else {
    //         //якщо фільму немає, пушимо в масив та перезаписуємо
    //         moviesInQueue.push(movie);  
    //         save(Q_KEY, moviesInQueue);
    //     }
    // }
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
