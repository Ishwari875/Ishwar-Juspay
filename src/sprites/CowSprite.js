import React from "react";

export default function CowSprite({ styles, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      style={styles}
      onClick={onClick}
    >
      <g>
        {/* Cow body */}
        <ellipse cx="100" cy="130" rx="80" ry="40" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        
        {/* Spots */}
        <ellipse cx="80" cy="120" rx="15" ry="20" fill="#B8860B" />
        <ellipse cx="120" cy="130" rx="20" ry="15" fill="#B8860B" />
        <ellipse cx="100" cy="110" rx="10" ry="15" fill="#B8860B" />

        {/* Head */}
        <circle cx="100" cy="75" r="30" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

        {/* Eyes */}
        <circle cx="90" cy="70" r="5" fill="#000000" />
        <circle cx="110" cy="70" r="5" fill="#000000" />
        <circle cx="90" cy="70" r="2" fill="#FFFFFF" />
        <circle cx="110" cy="70" r="2" fill="#FFFFFF" />

        {/* Nose */}
        <ellipse cx="100" cy="85" rx="12" ry="8" fill="#FFDAB9" />
        <circle cx="95" cy="85" r="2" fill="#000000" />
        <circle cx="105" cy="85" r="2" fill="#000000" />

        {/* Ears */}
        <ellipse cx="75" cy="75" rx="10" ry="15" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <ellipse cx="125" cy="75" rx="10" ry="15" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

        {/* Horns */}
        <path d="M 70 65 Q 65 55 70 60" fill="#8B4513" stroke="#000000" strokeWidth="2" />
        <path d="M 130 65 Q 135 55 130 60" fill="#8B4513" stroke="#000000" strokeWidth="2" />

        {/* Legs */}
        <rect x="65" y="155" width="10" height="25" fill="#000000" />
        <rect x="125" y="155" width="10" height="25" fill="#000000" />

        {/* Tail */}
        <line x1="160" y1="110" x2="180" y2="130" stroke="#000000" strokeWidth="4" />
        <circle cx="180" cy="130" r="5" fill="#000000" />
      </g>
    </svg>
  );
}
