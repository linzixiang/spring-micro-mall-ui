import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 查询字典数据列表
export function listData(query) {
  return request({
    url: `${contextPath.ADMIN}/system/dictOption/list`,
    method: 'get',
    params: query
  })
}

// 查询字典数据详细
export function getData(dictCode) {
  return request({
    url: `${contextPath.ADMIN}/system/dictOption/` + dictCode,
    method: 'get'
  })
}

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

// 新增字典数据
export function addData(data) {
  return request({
    url: `${contextPath.ADMIN}/system/dictOption`,
    method: 'post',
    data: data
  })
}

// 修改字典数据
export function updateData(data) {
  return request({
    url: `${contextPath.ADMIN}/system/dictOption`,
    method: 'put',
    data: data
  })
}

// 删除字典数据
export function delData(dictCode) {
  return request({
    url: '/system/dictOption/' + dictCode,
    method: 'delete'
  })
}

// 导出字典数据
export function exportData(query) {
  return request({
    url: '/system/dictOption/export',
    method: 'get',
    params: query
  })
}