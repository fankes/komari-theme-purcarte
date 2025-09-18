/**
 * OS Image Helper - 根据字符串匹配返回操作系统图像路径
 */

// 操作系统匹配配置
interface OSConfig {
  name: string;
  image: string;
  keywords: string[];
  isMonochrome: boolean; // 是否为单色图标，深色模式下需要颜色反转
}

// 操作系统匹配组
const osConfigs: OSConfig[] = [
  {
    name: "Android",
    image: "/assets/os-android.svg",
    keywords: ["android", "lineage", "lineageos", "aosp", "android os"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Alibaba",
    image: "/assets/os-alibaba.svg",
    keywords: ["alibaba"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "AlmaLinux",
    image: "/assets/os-alma.svg",
    keywords: ["alma", "almalinux"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Alpine Linux",
    image: "/assets/os-alpine.webp",
    keywords: ["alpine", "alpine linux"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Arch Linux",
    image: "/assets/os-arch.svg",
    keywords: ["arch", "archlinux", "arch linux"],
    isMonochrome: false, // 蓝色图标
  },
  {
    name: "Armbian",
    image: "/assets/os-armbian.svg",
    keywords: ["armbian"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "CentOS",
    image: "/assets/os-centos.svg",
    keywords: ["centos", "cent os"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Debian",
    image: "/assets/os-debian.svg",
    keywords: ["debian", "deb"],
    isMonochrome: false, // 红色图标
  },
  {
    name: "Fedora",
    image: "/assets/os-fedora.svg",
    keywords: ["fedora"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "FreeBSD",
    image: "/assets/os-freebsd.svg",
    keywords: ["freebsd", "bsd"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Gentoo",
    image: "/assets/os-gentoo.svg",
    keywords: ["gentoo"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "ImmortalWrt",
    image: "/assets/os-openwrt.svg",
    keywords: ["immortalwrt", "immortal", "emmortal"],
    isMonochrome: true, // 单色黑色图标
  },
  {
    name: "iStoreOS",
    image: "/assets/os-istore.png",
    keywords: ["istore", "istoreos", "istore os"],
    isMonochrome: false, // PNG 彩色图标
  },
  {
    name: "Kali Linux",
    image: "/assets/os-kail.svg",
    keywords: ["kail", "kali", "kali linux"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Linux Mint",
    image: "/assets/os-mint.svg",
    keywords: ["mint", "linux mint"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "macOS",
    image: "/assets/os-macos.svg",
    keywords: ["macos"],
    isMonochrome: true, // 纯黑色图标
  },
  {
    name: "Manjaro",
    image: "/assets/os-manjaro-.svg",
    keywords: ["manjaro"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "NixOS",
    image: "/assets/os-nix.svg",
    keywords: ["nixos", "nix os", "nix"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "OpenCloudOS",
    image: "/assets/os-opencloud.svg",
    keywords: ["opencloud"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "openSUSE",
    image: "/assets/os-openSUSE.svg",
    keywords: ["opensuse", "suse"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "OpenWrt",
    image: "/assets/os-openwrt.svg",
    keywords: ["openwrt", "open wrt", "open-wrt", "qwrt"],
    isMonochrome: true, // 单色黑色图标
  },
  {
    name: "Proxmox VE",
    image: "/assets/os-proxmox.ico",
    keywords: ["proxmox", "proxmox ve"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Red Hat",
    image: "/assets/os-redhat.svg",
    keywords: ["redhat", "rhel", "red hat"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Rocky Linux",
    image: "/assets/os-rocky.svg",
    keywords: ["rocky", "rocky linux"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Synology DSM",
    image: "/assets/os-synology.ico",
    keywords: ["synology", "dsm", "synology dsm"],
    isMonochrome: false, // 彩色图标
  },
  {
    name: "Ubuntu",
    image: "/assets/os-ubuntu.svg",
    keywords: ["ubuntu", "elementary"],
    isMonochrome: false, // 橙色图标
  },
  {
    name: "Windows",
    image: "/assets/os-windows.svg",
    keywords: ["windows", "win", "microsoft", "ms"],
    isMonochrome: false, // 蓝色图标
  },
];

// 默认配置
const defaultOSConfig: OSConfig = {
  name: "Unknown",
  image: "/assets/TablerHelp.svg",
  keywords: ["unknown"],
  isMonochrome: true, // 默认图标是单色的
};

/**
 * 根据输入字符串查找匹配的操作系统配置
 * @param osString - 操作系统相关的字符串
 * @returns 匹配的操作系统配置，如果没有匹配则返回默认配置
 */
function findOSConfig(osString: string): OSConfig {
  if (!osString) {
    return defaultOSConfig;
  }

  const normalizedInput = osString.toLowerCase().trim();

  // 遍历匹配配置
  for (const config of osConfigs) {
    for (const keyword of config.keywords) {
      if (normalizedInput.includes(keyword)) {
        return config;
      }
    }
  }

  // 如果没有匹配到，返回默认配置
  return defaultOSConfig;
}

/**
 * 根据输入字符串匹配返回操作系统图像路径
 * @param osString - 操作系统相关的字符串
 * @returns 匹配的操作系统图像路径，如果没有匹配则返回默认图像
 */
export function getOSImage(osString: string): string {
  return findOSConfig(osString).image;
}

/**
 * 根据输入字符串匹配返回操作系统图标是否为单色
 * @param osString - 操作系统相关的字符串
 * @returns 是否为单色图标，单色图标在深色模式下需要颜色反转
 */
export function isOSIconMonochrome(osString: string): boolean {
  return findOSConfig(osString).isMonochrome;
}

/**
 * 获取所有可用的操作系统图像
 * @returns 所有操作系统图像的映射表
 */
export function getAllOSImages(): Record<string, string> {
  const imageMap: Record<string, string> = {};

  osConfigs.forEach((config) => {
    const key = config.keywords[0]; // 使用第一个关键词作为键
    imageMap[key] = config.image;
  });

  imageMap.unknown = defaultOSConfig.image;

  return imageMap;
}

/**
 * 根据输入字符串匹配返回操作系统名称
 * @param osString - 操作系统相关的字符串
 * @returns 匹配的操作系统名称
 */
export function getOSName(osString: string): string {
  const config = findOSConfig(osString);

  // 如果匹配到具体的操作系统，返回其名称
  if (config !== defaultOSConfig) {
    return config.name;
  }

  // 如果没有匹配到，从输入字符串中提取名称
  if (!osString) {
    return "Unknown";
  }

  // 使用空格或斜杠分割，取第一个部分
  const parts = osString.trim().split(/[\s/]/);
  return parts[0] || "Unknown";
}

/**
 * 检查是否为支持的操作系统
 * @param osString - 操作系统相关的字符串
 * @returns 是否为支持的操作系统
 */
export function isSupportedOS(osString: string): boolean {
  if (!osString) return false;

  const config = findOSConfig(osString);
  return config !== defaultOSConfig;
}
