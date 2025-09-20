import { JAVBUS, JAVBUS_IMG } from './constants.js';

export const PAGE_REG = /^[1-9]\d*$/;

export function formatImageUrl(url?: string) {
    if (!url) return url;

    // 相对路径：拼接 JAVBUS_IMG
    if (!/^http/.test(url)) {
        return `${JAVBUS_IMG}${url}`;
    }

    // 如果是 javbus 其它语言域名，替换成 JAVBUS_IMG
    if (url.includes('javbus.com/ja')) {
        return url.replace(/https?:\/\/[^/]+/, JAVBUS_IMG);
    }

    // 其它情况（外部资源），保持原样
    return url;
}
