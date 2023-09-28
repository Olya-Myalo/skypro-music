// import axios from 'axios';

export async function getTracks () {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    
    if(!response.ok) {
        throw new Error("Не удалось получить плейлист, попробуйте позже!")
    }
    
    const data = await response.json();
    return data;
}

export async function getTrackById(id) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}`);
    
    if(!response.ok) {
        throw new Error("Ошибка при получении трека")
    }
      const track = await response.json();
      return track;
  }

  export async function registerUser({ email, password, username }) {
    try {
      const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message); 
      }
  
      const user = await response.json();
      return user;
    } catch (error) {
  
      console.error("Ошибка при регистрации пользователя:", error.message);
      // // throw error;
      return {errorMessage: "Ошибка при регистрации пользователя"}
    }
  }

  export async function loginUser({ email, password }) {
    try {
    const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message); 
    }

    const client = await response.json();
    return client;
  } catch (error) {

    console.error("Ошибка входа:", error.message);
    return {errorMessage: "Ошибка входа"}
  }
  }

//   export const getToken = ({ email, password}) => {
//     fetch("https://skypro-music-api.skyeng.tech/user/token/", {
//     method: "POST",
//     body: JSON.stringify({
//         email,
//         password,
//     }),
//     headers: {
//         "content-type": "application/json",
//     },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//     };


//   export const refreshToken = (token) => {
//     return axios.post(`https://skypro-music-api.skyeng.tech/user/token/refresh/`, { token })
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Error refreshing token:', error);
//         throw error;
//       });
//   };
  
  
