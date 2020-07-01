import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 查询部门列表
export function listDept(query) {
  return request({
    url: `${contextPath.ADMIN}/system/dept/list`,
    method: 'get',
    params: query
  })
}

// 查询部门详细
export function getDept(deptId) {
  return request({
    url: `${contextPath.ADMIN}/system/dept/preEdit/${deptId}`,
    method: 'get'
  })
}

// 查询部门下拉树结构
export function treeSelect() {
  return request({
    url: `${contextPath.ADMIN}/system/dept/treeSelect`,
    method: 'get'
  })
}

// 根据角色ID查询部门树结构
export function roleDeptTreeselect(roleId) {
  return request({
    url: '/system/dept/roleDeptTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增部门
export function addDept(data) {
  return request({
    url: `${contextPath.ADMIN}/system/dept/saveAdd`,
    method: 'post',
    data: data
  })
}

// 修改部门
export function updateDept(data) {
  return request({
    url: `${contextPath.ADMIN}/system/dept/saveEdit`,
    method: 'post',
    data: data
  })
}

// 删除部门
export function delDept(deptId) {
  return request({
    url: '/system/dept/' + deptId,
    method: 'delete'
  })
}