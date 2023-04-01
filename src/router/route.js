import { lazy } from 'react';

export const Login = lazy(() => import('../pages/Login'));
export const Dashboard = lazy(() => import('../pages/Home/index.jsx'));
export const Mine = lazy(() => import('../pages/Mine/index.jsx'));

// other
export const Exception404 = lazy(() => import('@/pages/Exception/404.jsx'));
export const Exception403 = lazy(() => import('@/pages/Exception/403.jsx'));
export const Exception500 = lazy(() => import('@/pages/Exception/500.jsx'));

// 聊天窗口
export const ChatRoom = lazy(() => import('@/pages/chat'));
