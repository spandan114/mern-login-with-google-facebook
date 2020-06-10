import api from './api';

export const fetchAll = () => dispatch => {
//FETCH ALL CONTACT
  api.User().fetchUser()
      .then(res => {
          dispatch({
              type: "GET_USER",
              payload: res
          })
      })
      .catch(err => console.log(err))

}
