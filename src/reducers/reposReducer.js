// выносим название типа в переменную
const SET_REPOS = 'SET_REPOS'; 
// дефолтное состояние
const defaultState = {
    // полученные репозитории
    items: [],
    // true, когда данные получаются с API git hub
    isFetching: true,
};
// редюсер, отвечающий за репозитории принимает состояние и action
export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        // обрабатывает данный action
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items
            }
        default:
            return state;
    }
}
// функция, которая возвращает action, т.е. объект, у которого есть поле type и
// какие-либо данные если захотим изменить значение count в редюсере, нам
// необходимо будет вызвать функцию setCount, в которую параметром мы передадим
// число, на которое хотим заменить значение. Функция вернет action, в котором
// payload будет = тому числу, которое мы передадим в параметры
export const setRepos = (repos) => ({type:SET_REPOS, payload:repos})
