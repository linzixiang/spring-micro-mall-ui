import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 查询字典类型列表
export function listType(query) {
  return request({
    url: `${contextPath.ADMIN}/system/dict/list`,
    method: 'get',
    params: query
  })
}

// 查询字典类型详细
export function getType(dictId) {
  return request({
    url: `${contextPath.ADMIN}/system/dict/detail/` + dictId,
    method: 'get'
  })
}

// 新增字典类型
export function addType(data) {
  return request({
    url: `${contextPath.ADMIN}/system/dict`,
    method: 'post',
    data: data
  })
}

// 修改字典类型
export function updateType(data) {
  return request({
    url: `${contextPath.ADMIN}/system/dict`,
    method: 'put',
    data: data
  })
}

// 删除字典类型
export function delType(dictId) {
  return request({
    url: `${contextPath.ADMIN}/system/dict/` + dictId,
    method: 'delete'
  })
}

// 导出字典类型
export function exportType(query) {
  return request({
    url: `${contextPath.ADMIN}/system/dict/export`,
    method: 'get',
    params: query
  })
}

// 获取字典选择框列表
export function optionselect() {
  return request({
    url: `${contextPath.ADMIN}/system/dict/optionselect`,
    method: 'get'
  })
}