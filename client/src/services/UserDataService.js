import http from '../http-common'
class UserDataService {
  getAll () {
    return http.get('/user')
  }

  create (data) {
    return http.post('/user', data)
  }

  loginVerification (logInfo) {
    return http.post('/user/login', logInfo)
  }

  auth () {
    return http.get('/user/auth', { withCredentials: true })
  }

  changePassword (id, data) {
    return http.put(`/user/changePassword/${id}`, data, { withCredentials: true })
  }

  logout () {
    return http.get('/user/logout', { withCredentials: true })
  }

  updateUser (id, data) {
    return http.put(`/user/updateUser/${id}`, data)
  }

  deleteUser (id) {
    return http.delete(`/user/delete/${id}`)
  }
}
export default new UserDataService()
