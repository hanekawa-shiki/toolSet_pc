import { Home, Info, Magnet } from 'lucide-react';

// 图标映射表：字符串名 → React 节点
const iconMap: Record<string, React.ReactNode> = {
  Home: <Home />,
  Info: <Info />,
  Magnet: <Magnet />,
};

export function resolveIcon(iconRef: string | undefined): React.ReactNode | undefined {
  if (iconRef === undefined || iconRef === '') {
    return undefined;
  }
  return iconMap[iconRef];
}
