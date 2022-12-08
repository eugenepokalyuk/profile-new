import React from 'react';
import Matter from 'matter-js';
const {useEffect, useRef} = React;

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
  
    useEffect(() => {
        let Engine = Matter.Engine;
        let Render = Matter.Render;
        let World = Matter.World;
        let Bodies = Matter.Bodies;
        let Mouse = Matter.Mouse;
        let MouseConstraint = Matter.MouseConstraint;
        let engine = Engine.create();
        // let engine = Engine.create({
            // controller: CustomRenderer,
        // });
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
        const top = Bodies.rectangle(0, 0, 1600, 100, {
            isStatic: true,
            render: {
                fillStyle: 'transparent',
            }
        });
        const ground = Bodies.rectangle(150, 610, 1600, 100, {
            isStatic: true,
            render: {
                fillStyle: 'transparent',
            }
        });
        const left = Bodies.rectangle(0, 0, 100, 1600, {
            isStatic: true,
            render: {
                fillStyle: 'transparent',
                // #1E1E1E
            }
        });
        const right = Bodies.rectangle(810, 0, 100, 1600, {
            isStatic: true,
            render: {
                fillStyle: 'transparent',
            }
        });
        //#endregion [ walls ]
        
      var mouse = Mouse.create(render.canvas),
      
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

      World.add(engine.world, mouseConstraint);

      Object.entries(skillsList1).forEach(element => {
        let x = Math.floor(Math.random() * 700) + 1;
        let y = Math.floor(Math.random() * 200) + 1;
        World.add(engine.world, [top, ground, right, left, Bodies.rectangle(x, y, 190, 90, { 
            // restitution:0.05,
            restitution:0.95,
            friction:1,
	          density:1,

            chamfer: { radius: 10 },
            
            // text: { value: element[0], font: "50"},
            render: {
              sprite: {
                texture: element[1].backgroundImage,
                xScale: 0.3,
                yScale: 0.3
              }
            }
        })])
      });

      Engine.run(engine);
      Render.run(render);
    });
    return (
      <div
        ref={boxRef}
        style={{
          // width: 600,
          // height: 250
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    );
};
export default Scene;