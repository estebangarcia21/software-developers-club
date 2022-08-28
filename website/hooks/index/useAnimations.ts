import { AnimationConfig } from '@react-spring/core/dist/declarations/src/AnimationConfig';
import {
  SpringRef,
  SpringValue,
  SpringValues,
  useChain,
  useSpring,
  UseSpringProps,
  useSpringRef
} from 'react-spring';

const ANIMATION_CONFIG: Partial<AnimationConfig> = {
  mass: 1,
  friction: 22,
  bounce: 0
};

const useAnimations = (
  typingAnim0Len: number
): [SpringValue<number>, [SpringValues, SpringValues, SpringValues[]]] => {
  const titleAnimRef = useSpringRef();
  const titleAnim = useSpring<UseSpringProps>({
    from: {
      opacity: 0,
      transform: 'translateX(-50px)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    config: ANIMATION_CONFIG,
    ref: titleAnimRef
  });

  const lastAnimRef = useSpringRef();
  const lastAnim = useSpring<UseSpringProps>({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: ANIMATION_CONFIG,
    ref: lastAnimRef
  });

  const typingAnimRef = useSpringRef();
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: typingAnim0Len },
    ref: typingAnimRef,
    config: {
      duration: 2000
    }
  });

  const useUpwardsAnimation = (): [SpringValues, SpringRef] => {
    const ref = useSpringRef();

    const props: UseSpringProps = {
      from: {
        opacity: 0,
        transform: 'translateY(50px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      },
      ref,
      config: ANIMATION_CONFIG
    };

    return [useSpring(props), ref];
  };

  const [u0, u0ref] = useUpwardsAnimation();
  const [u1, u1ref] = useUpwardsAnimation();
  const [u2, u2ref] = useUpwardsAnimation();

  useChain([titleAnimRef, u0ref, u1ref, typingAnimRef, lastAnimRef, u2ref]);

  return [number, [titleAnim, lastAnim, [u0, u1, u2]]];
};

export default useAnimations;
