import type { RouteObject } from 'react-router';
import { lazy } from 'react';
import { Outlet } from 'react-router';
import Layout from '@/layout/index';
import { getAutoRouteMetas } from './auto-routes';
import config from './config';

/**
 * 根据配置和 pages 目录自动生成路由表
 */
function buildRoutes(): RouteObject[] {
  const metas = getAutoRouteMetas();

  // 将自动生成的路由元数据转为 RouteObject，使用 lazy 加载
  const autoRoutes: RouteObject[] = metas.map((meta) => {
    const LazyComponent = lazy(meta.loader);
    return {
      path: meta.path,
      element: <LazyComponent />,
    };
  });

  // 合并自定义路由（如果有的话，追加到自动路由后面）
  const childRoutes = [...autoRoutes, ...(config.customRoutes || [])];

  // 如果配置了布局组件，将所有路由作为布局的子路由
  if (config.layoutPath != null && config.layoutPath !== '') {
    return [
      {
        path: '/',
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: childRoutes,
      },
    ];
  }

  return childRoutes;
}

export const routes: RouteObject[] = buildRoutes();
