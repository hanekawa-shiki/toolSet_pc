'use client';

import { Wrench } from 'lucide-react';

import * as React from 'react';
import { NavMain } from '@/components/nav-main';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { getRouteMenuItems } from '@/router/auto-routes';

/**
 * 将自动生成的路由元数据转换为侧边栏菜单项
 */
// function useRouteMenuItems() {
//   return getRouteMenuItems();
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const routeMenuItems = getRouteMenuItems();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Wrench className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">ToolSet</span>
                  <span className="truncate text-xs">A toolset website</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={routeMenuItems} />
      </SidebarContent>
    </Sidebar>
  );
}
