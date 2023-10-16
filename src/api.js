import axios from 'axios';

export async function getTracks () {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    
    if(!response.ok) {
        throw new Error("Не удалось получить плейлист, попробуйте позже!")
    }
    
    const data = await response.json();
    return data;
}

// export async function getFavoritesTracks(accessToken) {
//   const response = await fetch(
//     "https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/",
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Не удалось получить плейлист, попробуйте позже!");
//   }

//   const data = await response.json();
//   return data;
// }

// export async function addTrackFavorites(accessToken) {
//   const response = await fetch(
//     'https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/',
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Не удалось добавить трек, попробуйте позже!");
//   }

//   const data = await response.json();
//   return data;
// }

// export async function deleteTrackFavorites(accessToken, id) {
//   const response = await fetch(
//     `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
//     {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Не удалось удалить трек, попробуйте позже!");
//   }

//   const data = await response.json();
//   return data;
// }

export async function getTrackById(id) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}`);
    
    if(!response.ok) {
        throw new Error("Ошибка при получении трека")
    }
      const track = await response.json();
      return track;
  }

  export async function registerUser({ email, password, username }) {
    const response = await fetch(
      'https://skypro-music-api.skyeng.tech/user/signup/',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      },
    )
  
    const user = await response.json()
    return user
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

  function saveToken(tokenObject) {
    sessionStorage.setItem("access", JSON.stringify(tokenObject.access));
    sessionStorage.setItem("refresh", JSON.stringify(tokenObject.refresh));
  }

  export const getToken = ({ email, password }) => {
    return fetch("https://skypro-music-api.skyeng.tech/user/token/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        saveToken(data);
        console.log("Token saved successfully");
        return data;
      })
      .catch((error) => {
        console.error("Error fetching token:", error);
        throw error;
      });
  };

  export const refreshToken = (token) => {
    return axios
      .post("https://skypro-music-api.skyeng.tech/user/token/refresh/", { token })
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error refreshing token:", error);
        throw error;
      });
  };

  export const tokenIsExpired = (token) => {
     Promise((resolve, reject) => {
      setTimeout(() => {
        refreshToken(token)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            console.error("Error refreshing token:", error);
            reject(error);
          });
      }, 200000);
    });
  }
  


  
