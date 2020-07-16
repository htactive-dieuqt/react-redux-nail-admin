export function PostData(type, userData){

    let BaseUrl = 'https://5ee7007252bb0500161fd2b8.mockapi.io/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        })
    })
}