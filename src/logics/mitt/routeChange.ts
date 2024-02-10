/**
 * Used to monitor routing changes to change the status of menus and tabs. There is no need to monitor the route, because the route status change is affected by the page rendering time, which will be slow
 */

import { mitt } from '@/utils/mitt';
import type { RouteLocationNormalized } from 'vue-router';
import { getRawRoute } from '@/utils';

const key = Symbol();

const emitter = mitt<{
  [key]: RouteLocationNormalized;
}>();

let lastChangeTab: RouteLocationNormalized;

export function setRouteChange(lastChangeRoute: RouteLocationNormalized) {
  const r = getRawRoute(lastChangeRoute); //获取适配的页面,matched里面放纯路由信息，其他保持当前路由一致
  emitter.emit(key, r); //注册emitter 事件
  lastChangeTab = r; //最近一次变化的页面？
}

export function listenerRouteChange(
  callback: (route: RouteLocationNormalized) => void,
  immediate = true,
) {
  emitter.on(key, callback);
  immediate && lastChangeTab && callback(lastChangeTab);
}

export function removeTabChangeListener() {
  emitter.clear();
}
