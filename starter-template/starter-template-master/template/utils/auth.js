import Cookies from "js-cookie"
const User_Token = "user_token"
const User_Name = "user_Name"
const User_Icon = "user_Icon"
//这是一个对登陆信息验证的cookie 的通用js

//两种写法
/* export default{

}
 */
//存储cookies
 
export function cookiesSet(user_token,user_name,user_icon){
           Cookies.set(User_Token,user_token);
           Cookies.set(User_Name,user_name);
           Cookies.set(User_Icon,user_icon);

}


//获取cookies

export function cookiesGet(){
    return {
        user_token:Cookies.get(User_Token),
        user_name:Cookies.get(User_Name),
        user_icon:Cookies.get(User_Icon),
    }
}

//删除cookies
export function cookiesRemove(){
    Cookies.remove(User_Token);
    Cookies.remove(User_Name);
    Cookies.remove(User_Icon);

}
