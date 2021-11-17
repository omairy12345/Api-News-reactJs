import axios from "axios";

function NewsRest(params) {
    var apiKey = '9bd10bb968c74a82adf8784f1b4992d4';
    var ApiURL = 'https://newsapi.org/v2/top-headlines';
    return axios.get(ApiURL, {
        params: {
            ...params,
            apiKey: apiKey,
        },
    });

}

export default NewsRest;