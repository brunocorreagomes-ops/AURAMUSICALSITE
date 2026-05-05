/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SongRequest {
  id: string;
  style: string;
  occasion?: string;
  emotion?: string;
  voiceType?: 'feminina' | 'masculina';
  audioUrl?: string;
  lyrics?: string;
  planId: 'basic' | 'popular' | 'vip';
  upsells: {
    expressDelivery: boolean;
    instrumental: boolean;
    extended: boolean;
    pdfLyrics: boolean;
    spokenMessage: boolean;
    coverArt: boolean;
  };
  targetName: string;
  targetPhrase: string;
  habit: string;
  memory: string;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
}

export type AppStep = 'landing' | 'form' | 'pricing' | 'checkout' | 'delivery' | 'success';
