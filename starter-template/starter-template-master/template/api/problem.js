import request from "@/utils/service"
const prefix_name = "problem"

export default{
    findQaList(type,label,page,size){
       return request({
           url:`/${prefix_name}/${type}/${label}/${page}/${size}`,
           method:'get'
       })
    }
}