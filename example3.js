class Task {

    constructor(){
        console.log('Создан экземпляр task');
    }

    showId(){
        console.log(123);
    }

    static loadAll(){
        console.log('Загружаем все tasks...');
    }
}




console.log(typeof Task);
let task = new Task();
task.showId();
Task.loadAll();