import axios from "axios";


const category = 'general';
// const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;
const url = ' https://gnews.io/api/v4/top-headlines?category=general&lang=hi&apikey=ec8a1df338cca376771ebd8085a4494f'
const getData = () => {
    const response = axios.post(url)
}
