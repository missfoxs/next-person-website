import styled from "styled-components";
import DaftPunkBg from "./components/darf-punk-bg";
const Page = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Canvas = styled.div`
  width: 460px;
  height: 260px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type RichColorCircleProps = {
  size: number;
  leftPosition: number;
  topPosition: number;
  blur: number;
  delay: number;
  index: number;
};

const RichColorCircle = styled.div<RichColorCircleProps>`
  @keyframes bubble {
    0% {
      transform: translate(0, -80%);
      opacity: 0.4;
    }
    50% {
      transform: translate(0, -120%);
      opacity: 0.8;
    }
    100% {
      transform: translate(0, -80%);
      opacity: 0.4;
    }
  }

  position: absolute;
  width: ${({ size }) => size && `${size}px`};
  height: ${({ size }) => size && `${size}px`};
  left: ${({ leftPosition }) => leftPosition && `${leftPosition}%`};
  top: ${({ topPosition }) => topPosition && `${topPosition}%`};
  border-radius: 100%;
  background: #a029ab;
  opacity: 0.4;
  transform: translate(0, -80%);
  /* 将模糊或颜色偏移等图形效果应用于元素。通常用于调整图像、背景和边框的渲染 */
  filter: blur(${({ blur }) => blur && `${blur}px`});

  animation: bubble 10s ease-in-out infinite;
  /* 设置动画的延时时间 */
  animation-delay: ${({ delay }) => delay && `${delay}s`};

  /* 描述了元素内容和直系父元素的背景色如何混合 */
  /* mix-blend-mode: color-dodge; */

  &:nth-child(odd) {
    background-color: #1d40f8;
  }
`;

export default function DaftPunk() {
  return (
    <Page>
      <Canvas>
        {Array.from({ length: 20 }, (v, k) => k).map((item, index) => (
          <RichColorCircle
            key={item}
            index={index + 1}
            blur={Math.floor(Math.random() * 4) + 1}
            size={Math.floor(Math.random() * 45) + 10} // * 45表示直径处于0-45之间
            topPosition={Math.floor(Math.random() * 60) + 10}
            leftPosition={Math.floor(Math.random() * 80) + 0}
            delay={Math.floor(Math.random() * 4)}
          />
        ))}
        <DaftPunkBg />
      </Canvas>
    </Page>
  );
}
