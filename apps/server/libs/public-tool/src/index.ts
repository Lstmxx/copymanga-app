import { join } from 'path';

/**
 * 根目录
 */
export const rootPath = join(__dirname, '../../../');

export * from './bootstrap';
export * from './all.exception.filter';
export * from './transform.interceptor';
