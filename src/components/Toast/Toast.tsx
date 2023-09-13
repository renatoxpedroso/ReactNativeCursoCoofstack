import { useCallback, useEffect, useRef } from 'react';

import { useToast, useToastService } from '@services';
import { ToastContent } from './components/ToastContent';
import { Animated } from 'react-native';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim]
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();

      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
