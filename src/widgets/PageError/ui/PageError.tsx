import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const PageError: FC = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            {t('Something went wrong')}
            <Button onClick={reloadPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};
