/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SongRequest {
  id: string;
  style: string;
  targetName: string;
  targetPhrase: string;
  habit: string;
  memory: string;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
}

export type AppStep = 'landing' | 'form' | 'checkout' | 'delivery';
