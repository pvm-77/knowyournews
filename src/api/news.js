import axios from "axios";
const fetchData = async (category) => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=hi&apikey=${process.env.REACT_APP_API_KEY}`
    const response = await axios.get(url);
    // console.log('data from api is',response);
    return response.data
}
const newsService={fetchData}

export default newsService;