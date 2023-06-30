import { FC } from 'react';
import './Loader.scss';
import { classNames } from 'shared/lib/classNames/classNames';
export const Loader: FC = () => {
    return (
        <div className={classNames('lds-spinner', {}, [])} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
