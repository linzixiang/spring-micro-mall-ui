import request from '@/utils/request'
import contextPath from '@/api/contextPath'

// 登录方法
export function login(userName, password, code, uuid) {
  const data = {
    userName,
    password,
    code,
    uuid
  }
  return request({
    url: `${contextPath.SSO}/admin/login`,
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: `${contextPath.ADMIN}/system/userInfo/getAuth`,
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: `${contextPath.SSO}/admin/logout`,
    method: 'get'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: `${contextPath.SSO}/verify/captchaImage`,
    method: 'get'
  })
}