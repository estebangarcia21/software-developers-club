import {
  SpringRef,
  SpringValue,
  SpringValues,
  useChain,
  useSpring,
  UseSpringProps,
  useSpringRef
} from '@react-spring/web';

const useAnimations = (
  typingAnim0Len: number
): [SpringValue<number>, [SpringValues, SpringValues, SpringValues[]]] => {
  const typingAnimRef = useSpringRef();
  const { number } = useSpring({
    reset: true,
    from: { number: 0 },
    number: typingAnim0Len,
    ref: typingAnimRef,
    config: {
      duration: 2000
    }
  });

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
    config: {
      friction: 30
    },
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
    ref: lastAnimRef
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
      ref
    };

    return [useSpring(props), ref];
  };

  const [u0, u0ref] = useUpwardsAnimation();
  const [u1, u1ref] = useUpwardsAnimation();
  const [u2, u2ref] = useUpwardsAnimation();

  useChain(
    [titleAnimRef, u0ref, u1ref, typingAnimRef, lastAnimRef, u2ref],
    [0, 0.2, 0.4, 0.6, 1.65, 1.85]
  );

  return [number, [titleAnim, lastAnim, [u0, u1, u2]]];
};

export default useAnimations;
