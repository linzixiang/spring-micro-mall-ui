import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: `${contextPath.ADMIN}/system/menu/list`,
    method: 'get',
    params: query
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: `${contextPath.ADMIN}/system/menu/preEdit/${menuId}`,
    method: 'get'
  })
}

// 查询菜单下拉树结构
export function treeSelect() {
  return request({
    url: `${contextPath.ADMIN}/system/menu/treeSelect`,
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: '/system/menu/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: `${contextPath.ADMIN}/system/menu/saveAdd`,
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: `${contextPath.ADMIN}/system/menu/saveEdit`,
    method: 'post',
    data: data
  })
}

// 删除菜单
export function delMenu(menuId) {
  return request({
    url: '/system/menu/remove' + menuId,
    method: 'delete'
  })
}