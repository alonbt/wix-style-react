import React from 'react';

export function Arrow({ className = undefined }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={8}
      viewBox="0 0 24 8"
    >
      <defs>
        <filter
          id="zaxo0jk8xa"
          width="110.4%"
          height="125.6%"
          x="-5.2%"
          y="-12.8%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dx={2}
            dy={2}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={12}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        fillRule="evenodd"
        filter="url(#zaxo0jk8xa)"
        transform="translate(-33 -269)"
      >
        <path d="M34 269v.5c0 1.325 1 2.5 2.5 2.5h18.793l-2.147-2.146c-.173-.174-.195-.512 0-.708.196-.195.512-.195.708 0l3 3c.195.196.195.512 0 .708l-3 3c-.196.195-.512.195-.708 0-.173-.174-.2-.503 0-.708L55.293 273H36.5c-2 0-3.5-1.5-3.5-3.5v-.5h1z" />
      </g>
    </svg>
  );
}
