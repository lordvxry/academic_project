import { FC } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('enter username')}
                className={cls.input}
                autofocus
            />
            <Input
                placeholder={t('enter password')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>
                {t('Sign in')}
            </Button>
        </div>
    );
};
