import axios from "axios"

export default{
    getCode(code){
        return axios.get(`http://localhost:8888?operation=token&code=${code}`);
    },
    getinfo(access_token,openid){
        return axios.get(`http://localhost:8888?operation=userInfo&access_token=${access_token}&openid=${openid}`);
        
    }
}