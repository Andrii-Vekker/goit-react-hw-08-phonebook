import axios from "axios";
// const instance = axios.create({
    //     baseURL: "https://auth-backend-lesson.herokuapp.com/api",
    // });
axios.defaults.baseURL = "https://auth-backend-lesson.herokuapp.com/api"
    
export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(token) {
        axios.defaults.headers.common.Authorization = ""
    },
};

export const signup = async (signupData) => {
    const { data } = await axios.post("/users/signup", signupData);
    // instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    token.set(signupData.token)
    return data;
}

export const login = async (loginData) => {
    const { data } = await axios.post("/users/login", loginData);
    // instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    token.set(loginData.token)
    return data;
};

export const logOut = async () => {
    await axios.post("/users/logout")
  
}

// export default instance;