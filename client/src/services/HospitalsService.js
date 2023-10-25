import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('hospitals')
    },
    show(hospitalId) {
        return Api().get('hospital/' + hospitalId)
    },
    post(hospital) {
        return Api().post('hospital/', hospital)
    },
    put(hospital) {
        return Api().put('hospital/' + hospital.id, hospital)
    },
    delete(hospital) {
        return Api().delete('hospital/' + hospital.id, hospital)
    },
}