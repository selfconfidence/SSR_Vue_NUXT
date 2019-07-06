import request from "@/utils/service"
const prefix_name = "recruit"

export default{
    //推荐职位
    recommend(){
        return request({
            url:`/${prefix_name}/search/recommend`,
            method:'get'
        })
    },
    //最新职位
    newlist(){
        return request({
            url:`/${prefix_name}/search/newlist`,
            method:'get'
        })
    },
    findById(id){
        return request({
            url:`/${prefix_name}/${id}`,
            method:'get'
        })
    }
}