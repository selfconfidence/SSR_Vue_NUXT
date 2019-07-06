import request from "@/utils/service"
const prefix_name = "enterprise"

export default {
    findByid(id){
        return request({
            url:`/${prefix_name}/${id}`,
            method:'get'
        })
    },
    hotlist(){
        return request({
           url:`/${prefix_name}/search/hotlist`,
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