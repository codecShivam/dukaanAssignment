interface MenuItem {
  title: string;
  icon: string;
}

const requireMenuIcon = (title: string): string => require(`@/../../public/images/svg/menuIcons/${title}.svg`).default;

const menuItems: MenuItem[] = [
  { title: "Home", icon: "" },
  { title: "Orders", icon: "" },
  { title: "Products", icon: "" },
  { title: "Delivery", icon: "" },
  { title: "Marketing", icon: "" },
  { title: "Analytics", icon: "" },
  { title: "Payments", icon: "" },
  { title: "Tools", icon: "" },
  { title: "Discounts", icon: "" },
  { title: "Audience", icon: "" },
  { title: "Appearance", icon: "" },
  { title: "Plugins", icon: "" },
];

const MenuIcons: MenuItem[] = menuItems.map(item => ({
  title: item.title,
  icon: requireMenuIcon(item.title),
}));

export default MenuIcons;
