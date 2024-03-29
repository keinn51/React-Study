import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navi1 = () => {
  const navigate = useNavigate();
  const [goHome, setGoHome] = useState(false);

  // 컴포넌트가 생기는 순간에 실행!
  //useEffect(() => {
  //  alert('컴포넌트 시작!');
  //}, []);

  // 컴포넌트가 생기는 순간에 실행!
  // 컴포넌트의 deps가 바뀌면 실행
  useEffect(() => {
    if (goHome) {
      alert('이동');
      navigate('/B');
      navigate('/');
    }
  }, [goHome, navigate]);

  const clickGoHome = () => {
    setGoHome((prev) => !prev);
  };

  return <p onClick={clickGoHome}>B</p>;
};

export default Navi1;
