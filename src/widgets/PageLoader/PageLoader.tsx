import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

export const PageLoader: FC = () => {
    return (
        <div className={classNames(cls.PageLoader, {}, [])}>
            <Loader />
        </div>
    );
};
