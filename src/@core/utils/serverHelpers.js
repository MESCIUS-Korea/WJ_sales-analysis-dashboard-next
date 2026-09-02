import 'server-only';

// Next Imports
import { cookies } from 'next/headers';

// Config Imports
import themeConfig from '../../configs/themeConfig';

export const getSettingsFromCookie = () => {
  try {
    const cookieStore = cookies();
    const cookieName = themeConfig.settingsCookieName;
    const cookieValue = cookieStore.get(cookieName)?.value || '{}';

    return JSON.parse(cookieValue);
  } catch (error) {
    console.error('🔥 `cookies()` 호출 중 오류 발생:', error);
    return {}; // 안전한 기본값 반환
  }
};

// ✅ 올바른 함수 종료
export const getMode = () => {
  const settingsCookie = getSettingsFromCookie();
  return settingsCookie.mode || themeConfig.mode;
};

export const getSystemMode = () => {
  return getMode(); // ✅ 불필요한 변수 제거
};

export const getServerMode = () => {
  return getMode(); // ✅ 불필요한 변수 제거
};
