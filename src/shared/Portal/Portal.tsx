import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: HTMLElement
}

export const Portal: FC<PortalProps> = ({ element = document.body, children }) => {
    return createPortal(children, element);
};
