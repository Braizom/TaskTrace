import http from '../http-common'

class ListDataService {
  findAll (id) {
    return http.get(`/list/${id}`)
  }

  create (id, data) {
    return http.post(`/list/${id}`, data)
  }

  update (id, data) {
    return http.put(`/list/update/${id}`, data)
  }

  delete (id) {
    return http.delete(`/list/delete/${id}`)
  }
}
export default new ListDataService()
