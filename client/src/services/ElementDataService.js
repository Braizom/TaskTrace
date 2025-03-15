import http from '../http-common'

class ElementDataService {
  findAll (id) {
    return http.get(`/element/${id}`)
  }

  create (id, data) {
    return http.post(`/element/${id}`, data)
  }

  update (id, data) {
    return http.put(`/element/update/${id}`, data)
  }

  delete (id) {
    return http.delete(`/element/delete/${id}`)
  }
}
export default new ElementDataService()
