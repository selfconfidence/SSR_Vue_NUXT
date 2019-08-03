import request from "@/utils/service"
const prefix_name = "label"

export default{
    toplist(){
        return request({
            url:`/${prefix_name}/toplist`,
            method:'patch'
        })
    }
}