

const BASE_URL = "https://drinkify.b.goit.study/api/v1";

async function firstReqAPI() {

    // ? вираховуємо ширину в*юпорта користувача 
    let widthWindowUser = document.documentElement.clientWidth;
    console.log(widthWindowUser);
    // ? вираховуємо ширину в*юпорта користувача

    let requestCards = (widthWindowUser > 1280) ? 9: 8;  

    try {
        
        // let response = axios.get(`${BASE_URL}/cocktails/?r=${requestCards}`);

        fetch(`${BASE_URL}/cocktails/?r=${requestCards}`)
        .then(response => {
        if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })

        return response.data;

    }
    catch {
        console.error(error.message)
    }

};

export { firstReqAPI };