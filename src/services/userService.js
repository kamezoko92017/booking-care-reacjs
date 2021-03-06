import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {
        email: email,
        password: password
    })
}

const getAllUsers = (inputId) => {
    return axios.post('/api/get-all-users', { id: inputId })
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: { id: userId }
    })
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
}