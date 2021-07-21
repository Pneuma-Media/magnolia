import axios from 'axios';

const host = 'http://localhost:3001';

export const addStor = async () => {
    const res = await axios.post(`${host}/add_stor`);
    return res;
}

export const storUpdate = async (formData) => {
    const res = await axios.put(`${host}/stor_update`, formData);
    return res;
}

export const getStore = async () => {
    const res = await axios.get(`${host}/get_stor`);
    return res;
}


export const getStorPublic = async (slug) => {
    const res = await axios.get(`${host}/get_public_stor/${slug}`);
    return res;
}


export const addCategory = async (formData) => {
    const res = await axios.post(`${host}/add_category`, formData);
    return res;
}

export const deleteCategory = async (id) => {
    const res = await axios({
        method: 'DELETE',
        url: `${host}/delete_category`,
        data: { id }
    })
    return res;
}

export const updateCategory = async (id, data) => {
    const res = await axios.put(`${host}/category_update/${id}`, data);
    return res;
}

export const addProduct = async (formData) => {
    const res = await axios.post(`${host}/add_product`, formData);
    return res;
}

export const getStorProduct = async (idStore) => {
    const res = await axios.get(`${host}/get_product/${idStore}`);
    return res;
}

export const productDelete = async (id) => {
    const res = await axios({
        method: 'DELETE',
        url: `${host}/delete_product`,
        data: id 
    })
    return res;
}

export const productUpdate = async (formData) => {
    const res = await axios.put(`${host}/product_update`, formData);
    return res;
}


export const addFiles = async (files) => {
    const res = await axios.post(`${host}/add_file`, files);
    return res;
}








export const deleteBook = async (id) => {
    const res = await axios.post(`${host}/delete_book`, id);
    return res;
}



export const allBooks = async () => {
    const res = await axios.get(`${host}/all_books`);
    return res;
}

export const oneBook = async (id) => {
    const res = await axios.get(`${host}/one_book/${id}`);
    return res;
}

export const addUser = async (formData) => {
    const res = await axios.post(`${host}/add_user`, formData);
    return res;
}

export const authorizationUser = async (formData) => {
    const res = await axios.post(`${host}/authorization_user`, formData);
    return res;
}

export const getUser = async (token) => {
    const res = await axios.post(`${host}/get_user`, { token });
    return res;
}