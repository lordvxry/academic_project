import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
    const { className = '', short } = props;
    const { t, i18n } = useTranslation();
    const currentTitle = short ? 'ShortLang' : 'Language';

    const toggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR }
            onClick={toggle}
        >
            {t(currentTitle)}
        </Button>
    );
});
