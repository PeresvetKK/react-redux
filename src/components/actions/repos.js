import axios from "axios";
import {setRepos} from '../../reducers/reposReducer';

export const getRepos = (searchQuery = 'stars:%3E1') => {
    return async (dispatch) => {
        // ответ сервера
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`) 
        // через диспетчера помещаем данные в setRepos в поле Payload
        dispatch(setRepos(response.data))
    }
}