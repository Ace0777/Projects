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

async function redirectToGitHubName(){
    const response = await axios.get(`${process.env.BACK_END_URL}/nome`);
    alert("Nome do usuario: " + response.data.name)
}

async function redirectToGitHubRepository(){
    const response = await axios.get(`${process.env.BACK_END_URL}/repositorio`);
    alert("Numero de repositorios do " + response.data.name + ": " + response.data.public_repos)
}

window.onload = async () =>{

    document.querySelector(".login").addEventListener("click", redirectToGitHub);

    document.querySelector(".usuario").addEventListener("click", redirectToGitHubName);

    document.querySelector(".repositorio").addEventListener("click", redirectToGitHubRepository);

    const {code} = qs.parseUrl(window.location.href).query;
       
    if(code){
        try {
            const response = await axios.post(`${process.env.BACK_END_URL}/login`, { code } );
            const user = response.data;
            console.log(user)
           
        } catch (error) {
            alert("deu ruim")
            console.log("err", err);
        }
    }
}




