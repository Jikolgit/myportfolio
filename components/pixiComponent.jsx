
import { Stage , Container, Sprite, Text, useTick} from '@pixi/react'

export function PixiAppReact()
{
const i = 0.1;
const count = 10;
const width = 300;
const height = 300;
const stageProps = {
  height,
  width,
  options: {
    backgroundAlpha: 0,
    antialias: true,
  },
};

// useTick(delta => {

//   });

let startTick = ()=>
{
    
}
return (
        <Stage
          width={300}
          height={300}
          raf={false}
          renderOnComponentChange={true}
          options={{ antialias: true, backgroundAlpha: 0 }}
          onMount = {startTick}
        >
          <Sprite
            anchor={[-(2 + Math.sin(i / 5) * 2), 0.5]}
            position={150}
            rotation={(Math.PI / 180) * 90 + -i}
            image="logo-react.png"
          />
        </Stage>
      );
}