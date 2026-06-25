import { ChevronRightIcon } from 'lucide-react';
import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function NavMain({ items }: { items: NavMainItem[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map(item => (
          <NavMenuItem key={item.title} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavMenuItem({ item }: { item: NavMainItem }) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const { isMobile, setOpenMobile } = useSidebar();
  const isParent = !!(item.items && item.items.length > 0);

  // 判断当前菜单项或其子项是否激活
  const isActive = isParent
    ? (item.items?.some(sub => location.pathname === sub.url) ?? false)
    : location.pathname === item.url;

  const toggleCollapse = () => {
    triggerRef.current?.click();
  };

  // 移动端点击导航后自动隐藏侧边栏
  const closeMobileSidebar = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Collapsible asChild defaultOpen={item.isActive || isActive}>
      <SidebarMenuItem>
        <NavMenuButton
          item={item}
          isParent={isParent}
          isActive={isActive}
          onClick={isParent && !item.url ? toggleCollapse : undefined}
          onNavigate={closeMobileSidebar}
        />

        {isParent
          ? (
              <>
                <CollapsibleTrigger ref={triggerRef} asChild>
                  <SidebarMenuAction className="data-[state=open]:rotate-90">
                    <ChevronRightIcon />
                    <span className="sr-only">Toggle</span>
                  </SidebarMenuAction>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items!.map(subItem => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={location.pathname === subItem.url}
                          onClick={closeMobileSidebar}
                        >
                          <NavLink
                            to={subItem.url}
                            className={({ isActive: active }) =>
                              active ? 'text-sidebar-accent-foreground bg-sidebar-accent' : ''}
                          >
                            <span>{subItem.title}</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </>
            )
          : null}
      </SidebarMenuItem>
    </Collapsible>
  );
}

/**
 * 菜单按钮：
 * - 无子菜单 → NavLink 正常跳转
 * - 有子菜单 + 无 url → 按钮展开/折叠，不跳转
 * - 有子菜单 + 有 url → NavLink 跳转
 */
function NavMenuButton({
  item,
  isParent,
  isActive,
  onClick,
  onNavigate,
}: {
  item: NavMainItem;
  isParent: boolean;
  isActive: boolean;
  onClick?: () => void;
  onNavigate?: () => void;
}) {
  const content = (
    <>
      {item.icon}
      <span>{item.title}</span>
    </>
  );

  const handleClick = () => {
    onClick?.();
    onNavigate?.();
  };

  if (isParent && !item.url) {
    return (
      <SidebarMenuButton asChild={false} tooltip={item.title} onClick={handleClick} isActive={isActive}>
        <span className="cursor-pointer select-none">{content}</span>
      </SidebarMenuButton>
    );
  }

  return (
    <SidebarMenuButton asChild tooltip={item.title} isActive={isActive} onClick={onNavigate}>
      <NavLink
        to={item.url}
        className={({ isActive: active }) =>
          active ? 'text-sidebar-accent-foreground bg-sidebar-accent' : ''}
      >
        {content}
      </NavLink>
    </SidebarMenuButton>
  );
}
