import request from "@/utils/service"
const prefix_name = "gathering"

export default {
    gatheringSearchList(page,size,parameterMap){
        return request({  //es6模板字符串写法 不用拼接
            url: `/${prefix_name}/search/${page}/${size}`,
            method: 'post',
            data:parameterMap
        })
    },
    findById(id){
        return request({
            url:`/${prefix_name}/${id}`,
            method:'get'
        })
    }

}