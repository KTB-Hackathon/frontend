import React from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  direction: 'left' | 'right';
  link: string;
}

// 방향과 링크를 받아 버튼 생성
const NavButton: React.FC<NavButtonProps> = ({ direction, link }) => {
  return (
    <Link
      to={link}
      className={`absolute bottom-4 ${direction === 'left' ? 'left-4' : 'right-4'} text-white text-2xl`}
    >
      {direction === 'left' ? '⬅️' : '➡️'}
    </Link>
  );
};

export default NavButton;
