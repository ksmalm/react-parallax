import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;

      setCurrentScrollY(currentScrollY)
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{'display': 'grid', 'grid-template-rows': 'repeat(4, 100vh)'}}>

      <div style={{position: 'relative', zIndex: 100, justifySelf: 'center' }}>
        <div style={{background: 'white', top: '50vh', position: 'relative', display: 'inline'}}>Her er tekst 1</div>
      </div>
      <div style={{position: 'relative', zIndex: 100, justifySelf: 'center' }}>
        <div style={{background: 'white', top: '50vh', position: 'relative', display: 'inline'}}>Her er tekst 2</div> 
      </div>
      <div style={{position: 'relative', zIndex: 100, justifySelf: 'center' }}>
        <div style={{background: 'white', top: '50vh', position: 'relative', display: 'inline'}}>Her er tekst 3</div> 
      </div>
      <div style={{position: 'relative', zIndex: 100, justifySelf: 'center' }}>
        <div style={{background: 'white', top: '50vh', position: 'relative', display: 'inline'}}>Her er tekst 4</div> 
      </div>

      {console.log(window.innerHeight / 2)}

      <div style={{ overflow: 'hidden' }}>
        <img style={{ 'object-fit': 'cover', transition: '.5s', height: '100vh', width: '100%', top: 0, position: 'fixed' }} src="https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
      <div style={{ overflow: 'hidden' }}>
        <img style={{ 'object-fit': 'cover', transition: '.5s', height: '100vh', width: '100%', top: 0, position: 'fixed', opacity: currentScrollY > (window.innerHeight / 2) ? 1 : 0 }} src="https://images.unsplash.com/photo-1623387417648-2d76e4747257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" />
      </div>
      <div style={{ overflow: 'hidden' }}>
        {currentScrollY > ((window.innerHeight)) &&
          <img style={{ 'object-fit': 'cover', transition: '.5s', height: '100vh', width: '100%', top: 0, position: 'fixed', opacity: currentScrollY > ((window.innerHeight) * 1.5) ? 1 : 0 }} src="https://images.pexels.com/photos/4497373/pexels-photo-4497373.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        }
      </div>
      <div style={{ overflow: 'hidden' }}>
        {currentScrollY > ((window.innerHeight) * 1.5) &&
          <img style={{ 'object-fit': 'cover', transition: '.5s', height: '100%', width: '100%', top: 0, position: 'fixed', opacity: currentScrollY > ((window.innerHeight) * 2.5) ? 1 : 0 }} src="https://images.pexels.com/photos/6331085/pexels-photo-6331085.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        }
      </div>
    </div>
  );
};

export default App;