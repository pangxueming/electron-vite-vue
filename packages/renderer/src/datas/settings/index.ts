import { i18n } from '@/i18n';

const t = i18n.global.t;

export const settingsData = {
  language: {
    title: t('setting.language'),
    selectOpts: [
      {
        value: 'cn',
        label: '中文',
      },
      {
        value: 'en',
        label: 'english',
      },
      {
        value: 'tw',
        label: '繁体',
      }
    ],
    value: ''
  },
  serverAddress: {
    title: t('setting.serverAddress'),
    value: ''
  },
  serverPort: {
    title: t('setting.serverPort'),
    value: ''
  },
  versionServerAddress: {
    title: t('setting.versionServerAddress'),
    value: ''
  },
  deviceManagementAddress: {
    title: t('setting.deviceManagementAddress'),
    value: ''
  },
  deviceServicePort: {
    title: t('setting.deviceServicePort'),
    value: ''
  }
}
