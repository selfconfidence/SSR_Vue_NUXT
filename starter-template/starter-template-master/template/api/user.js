import request from "@/utils/service"
const prefix_name = "user"

export default {
    sendsms(mobile){
        return request({
            url:`/${prefix_name}/sendsms/${mobile}`,
            method:'post'
        })
    },
    login(params){
        return request({
            url:`/${prefix_name}/login`,
            method:'post',
            data:params
        })
    }
}