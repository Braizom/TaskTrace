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

  findByEmail (logInfo) {
    return http.post('/user/login', logInfo)
  }

  update (id, data) {
    return http.put(`/user/${id}`, data)
  }

  delete (id) {
    return http.delete(`/user/${id}`)
  }
}
export default new UserDataService()
