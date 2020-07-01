import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 获取路由
export const getRouters = () => {
  return request({
    url: `${contextPath.ADMIN}/system/userInfo/getRouters`,
    method: 'get'
  })
}