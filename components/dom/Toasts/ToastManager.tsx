import { useToastStore } from '@store/toasts'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import MotionGlass from '../Glass/MotionGlass';
import Glass from '../Glass/MotionGlass';
import Stack from '../Stack/Stack';

type Props = {}

const TOAST_DURATION = 2000;
const TOAST_EXIT_DURATION = 1000;

const ToastManager = (props: Props) => {
    const { toasts, removeToast, updateToast } = useToastStore();
    const removeQueue = useRef({})

    const toastMap = Object.values(toasts);

    console.log('toasts vs queue', toasts, removeQueue.current)

    useEffect(() => {
        console.log('checking ALL toasts')
      toastMap.forEach((toast) => {
        console.log('checking toast', toast.time, removeQueue.current)
        // New toast? Set a timer to hide it.
        if(!(toast.time in removeQueue.current)) {
            console.log('removing toast', toast.time)

            // Mark for deletion
            removeQueue.current[toast.time] = setTimeout(() => {
                console.log('REMOVING!')
                removeToast(toast.time)
                delete removeQueue.current[toast.time]; 
            }, TOAST_DURATION)
        }
      })
    }, [toasts])
    

  return (
    <Stack vertical gap="2px">
      <AnimatePresence>
            {toastMap.map(toast => (
                <motion.div
                    key={toast.time}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    >
                    <Glass>
                        <h3>{toast.content.title} - {toast.time}</h3>
                    </Glass>
                </motion.div>
            ))}
      </AnimatePresence>
    </Stack>
  )
}

export default ToastManager