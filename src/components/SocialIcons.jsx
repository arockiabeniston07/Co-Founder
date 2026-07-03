import React from 'react';

export const GithubIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const LeetCodeIcon = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.218 5.3 5.3 0 0 0 1.93 3.666 5.33 5.33 0 0 0 2.923 1.258 5.253 5.253 0 0 0 2.825-.39 5.247 5.247 0 0 0 2.146-1.74l3.197-3.414 1.155-1.233-3.693-3.486-1.077 1.15 1.119 1.189-3.197 3.415a3.3 3.3 0 0 1-1.348 1.094 3.336 3.336 0 0 1-1.782.246 3.35 3.35 0 0 1-1.838-.792 3.332 3.332 0 0 1-1.212-2.3 3.335 3.335 0 0 1 .078-1.394 3.298 3.298 0 0 1 .759-1.32l3.855-4.125 5.405-5.787a1.374 1.374 0 0 1 1.956 0l2.395 2.56a1.376 1.376 0 0 1 0 1.921l-3.056 3.267-3.694-3.486 3.136-3.35-1.424-1.523Z" />
    <path d="M21.216 11.085l-7.228-6.822-1.077 1.15 7.228 6.82-1.077 1.15z" />
  </svg>
);
