import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
// import {t} from '@/hooks/web/useI18n';

const project: AppRouteModule = {
  path: '/project',
  name: 'Project',
  component: LAYOUT,
  redirect: '/project/index',
  meta: {
    orderNo: 11,
    icon: 'ion:home',
    title: '项目',
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/project/home/index.vue'),
      meta: {
        // affix: true,
        title: '首页',
      },
    },
    {
      path: 'bug',
      name: 'bug',
      component: () => import('@/views/project/bug/index.vue'),
      meta: {
        title: '缺陷分析',
      },
    },
  ],
};

export default project;
