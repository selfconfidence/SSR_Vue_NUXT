import request from "@/utils/service"
const prefix_name = "spit"

export default{

    findByPageList(page,rows,queryData){
        return request({
           url:`/${prefix_name}/search/${page}/${rows}`,
           method:'post',
           data: queryData
        })
    },
    findById(id){
        return request({
            url:`/${prefix_name}/${id}`,
            method:'get'
        })
    },
    commentList(id,page,rows){
      
        return request({
            url:`/${prefix_name}/comment/${id}/${page}/${rows}`,
            method:'get'
        })
    },
    thumbup(id){
       
        return request({
            url:`/${prefix_name}/thumbup/${id}`,
            method:'put'
        })
    },
    save(pojo){
        return request({
            url :`/${prefix_name}`,
            method:'post',
            data:pojo
        })
    }
}