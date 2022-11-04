import axios from "axios";

const instance = axios.create({
  baseURL: 'https://6357ee1ec26aac906f369749.mockapi.io/api/contacts'
});

export const getContacts = async () => {
    const { data } = await instance.get("/");
    return data
};

export const addContact = async (data) => {
    const { data: result } = await instance.post("/", data);
    return result
};

export const removeContact = async (id) => {
    const data = await instance.delete(`/${id}`)
    return data
}