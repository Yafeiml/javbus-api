import { JAVBUS, JAVBUS_IMG } from './constants.js';

export const PAGE_REG = /^[1-9]\d*$/;

export function formatImageUrl(url?: string) {
    if (!url) return url;

    // ���·����ƴ�� JAVBUS_IMG
    if (!/^http/.test(url)) {
        return `${JAVBUS_IMG}${url}`;
    }

    // ����� javbus ���������������滻�� JAVBUS_IMG
    if (url.includes('javbus.com/ja')) {
        return url.replace(/https?:\/\/[^/]+/, JAVBUS_IMG);
    }

    // ����������ⲿ��Դ��������ԭ��
    return url;
}
