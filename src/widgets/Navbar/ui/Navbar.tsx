import React, { FC, useCallback, useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prevState => !prevState);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Sign in')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            />
        </div>
    );
};
