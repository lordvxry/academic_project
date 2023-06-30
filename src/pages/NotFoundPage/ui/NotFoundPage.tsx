import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
export const NotFoundPage: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [])}>
            {t('NotFound')}
        </div>
    );
};
