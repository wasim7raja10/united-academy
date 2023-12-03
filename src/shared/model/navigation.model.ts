export interface NavigationItem {
  title: string;
  href: string;
  child?: NavigationItem[];
  target?: string;
}
