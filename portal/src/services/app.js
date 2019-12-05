import request from '@/utils/request';

export async function queryApps() {
  return request('/api/apps');
}