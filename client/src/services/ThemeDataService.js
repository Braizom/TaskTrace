import http from '../http-common'

class ThemeDataService {
  findAll (id) {
    return http.get(`/theme/${id}`)
  }

  create (id, data) {
    return http.post(`/theme/${id}`, data)
  }

  update (id, data) {
    return http.put(`/theme/update/${id}`, data)
  }

  delete (id) {
    return http.delete(`/theme/delete/${id}`)
  }
}
export default new ThemeDataService()
