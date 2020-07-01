import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 根据字典类型查询字典数据信息
export function getDicts(dictCode) {
  let data = dictCode
  if (typeof dictCode === 'string') {
    data = [dictCode]
  }
  return request({
    url: `${contextPath.ADMIN}/common/queryDict`,
    method: 'post',
    data: {
      code: data
    }
  })
}

// 查询表字典选项key-value
export function listOptions(query) {
  return request({
    url: `${contextPath.ADMIN}/common/queryCode`,
    method: 'post',
    data: query
  })
}