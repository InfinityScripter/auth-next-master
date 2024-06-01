/**
 * This file contains the routes that
 * are public and do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * This file contains the routes that are
 * protected and require authentication.
 * @type {string[]}
 */

export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
];

/**
 * This file contains the routes that are
 * protected and require authentication.
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth';

/**
 * default login redirect
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/settings';
