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

  get (id) {
    return http.get(`/user/${id}`)
  }

  update (id, data) {
    return http.put(`/user/${id}`, data)
  }

  delete (id) {
    return http.delete(`/user/${id}`)
  }
}
export default new UserDataService()
