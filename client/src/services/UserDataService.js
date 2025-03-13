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
    return http.get('/user/auth', { withCredentials: true })
  }

  changePassword (id, data) {
    console.log('id : ', id, 'data : ', JSON.stringify(data))
    return http.put(`/user/changePassword/${id}`, data, { withCredentials: true })
  }

  logout () {
    return http.get('/user/logout', { withCredentials: true })
  }

  updateUser (id, data) {
    console.log('le id dans update de userDataService.js et les data : ', id, data)
    return http.put(`/user/updateUser/${id}`, data)
  }

  deleteUser (id) {
    console.log('dans deleteUser de Userdataservice', id)
    return http.delete(`/user/delete/${id}`)
  }
}
export default new UserDataService()
