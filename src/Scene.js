import React from 'react';
import Matter from 'matter-js';
const { useEffect, useState, useRef, useLayoutEffect } = React;
const skillsList1 = {
  'CSS3': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/CSS3.png?raw=true"
  },
  'HTML5': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/HTML5.png?raw=true"
  },
  'RestAPI': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/RestAPI.png?raw=true"
  },
  'Tabulator': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/Tabulator.png?raw=true"
  },
  'PostgreSQL': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/PostgreSQL.png?raw=true"
  },
  'Nunjucks': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/Nunj.png?raw=true"
  },
  'SQL': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/SQL.png?raw=true"
  },
  'NodeJS': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/NodeJS.png?raw=true"
  },
  'JavaScript': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/JavaScript.png?raw=true"
  },
  'Bootstrap': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/Bootstrap.png?raw=true"
  },
  'SQLite3': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/SQLite3.png?raw=true"
  },
  'ExpressJS': {
    backgroundImage: "https://github.com/eugenepokalyuk/profile-v2.0/blob/main/src/Images/assets/ExpressJS.png?raw=true"
  }
}
export const Scene = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const style = { width, height };

  useLayoutEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Mouse = Matter.Mouse;
    let Common = Matter.Common;
    let Composites = Matter.Composites;
    let MouseConstraint = Matter.MouseConstraint;
    let engine = Engine.create();
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: '#1E1E1E',
        wireframes: false
      }
    });

    //#region [ walls ]
    var stack = Composites.stack(100, 20, 20, 2, 0, 0, function (x, y) {
      return Bodies.circle(x, y, Common.random(30, 50), { friction: 0.00001, restitution: 0.5, density: 0.001 });
    });

    const top = Bodies.rectangle(400, 0, 800, 50, { isStatic: true });
    const ground = Bodies.rectangle(400, 600, 800, 50, { isStatic: true });
    const left = Bodies.rectangle(800, 300, 50, 600, { isStatic: true });
    const right = Bodies.rectangle(0, 300, 50, 600, { isStatic: true });
    //#endregion [ walls ]

    var mouse = Mouse.create(render.canvas),

      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
        }
      });

    World.add(engine.world, mouseConstraint);
    World.add(engine.world, [top, ground, right, left, stack])

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 }
    });

    Engine.run(engine);
    Render.run(render);
  });
  return (
    <div
      ref={boxRef}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <canvas ref={canvasRef} style={style} />
    </div>
  );
};

export default Scene;