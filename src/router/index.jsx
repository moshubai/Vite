import TransitionPage from '@/layout/transition';
import React from 'react';

import { ChatRoom, Dashboard, Mine } from './route';

export const routes = [
  {
    path: '/home',
    element: <Dashboard />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/chat',
    // element: <ChatRoom />,
    isHasParams: true,
    component: () => <TransitionPage replace={(uuid) => `/chat/${uuid}`} />,
  },
  {
    path: '/chat/:uuid',

    element: <ChatRoom />,
  },
];
