import http from '../http-common'
class UserDataService {
  getAll () {
    return http.get('/user')
  }

  create (data) {
    console.log(data)
    console.log('dans userdataservice.js')
    return http.post('/user', data)
  }

  loginVerification (logInfo) {
    return http.post('/user/login', logInfo)
  }

  auth () {
    // On va dabord verif si ya un token pour éviter les msg d'erruers dans la console
    /*
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (!token) {
      return console.error('Token not found')
    }
    */
    return http.get('/user/auth', { withCredentials: true })
  }

  logout () {
    return http.get('/user/logout', { withCredentials: true })
  }

  update (id, data) {
    return http.put(`/user/${id}`, data)
  }

  deleteUser (id) {
    console.log('dans deleteUser de Userdataservice', id)
    return http.delete(`/user/delete/${id}`)
  }
}
export default new UserDataService()
