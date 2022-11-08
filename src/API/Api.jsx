import axios from "axios";
import { token } from "./ApiAuth";
// import instance from "./ApiAuth";
// axios.defaults.baseURL = "https://auth-backend-lesson.herokuapp.com/api"

export const getContacts = async () => {
    const { data } = await axios.get("/contacts");
    token.set(data.token)
    //  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data
};

export const addContact = async (data) => {
    const { data: result } = await axios.post("/contacts", data);
    token.set(data.token)
    //  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return result
};

export const removeContact = async (id) => {
    const data = await axios.delete(`/contacts/${id}`)
    token.set(data.token)
    //  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data
}