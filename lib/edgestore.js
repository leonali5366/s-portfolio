'use client';

import { createEdgeStoreProvider } from '@edgestore/react';

// Create the EdgeStore provider and hook
const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider();

export { EdgeStoreProvider, useEdgeStore };
