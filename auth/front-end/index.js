import axios from "axios";
import qs from "query-string"

function redirectToGitHub(){
    const GITHUB_URL = "https://github.com/login/oauth/authorize";
    const params = {
        response_type: 'code',
        scope: 'user',
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.REDIRECT_URL,
    }
    const queryStrings = qs.stringify(params);
    const authURL = `${GITHUB_URL}?${queryStrings}`;
    window.location.href = authURL;
}

window.onload = async () =>{
    document.querySelector(".login").addEventListener("click", redirectToGitHub);

    const {code} = qs.parseUrl(window.location.href).query;
    if(code){
        try {
            const response = await axios.post(`${process.env.BACK_END_URL}/login`, { code })
            const user = response.data;
            console.log(user);
        } catch (error) {
            alert("deu ruim")
            console.log("err", err);
        }
    }
}