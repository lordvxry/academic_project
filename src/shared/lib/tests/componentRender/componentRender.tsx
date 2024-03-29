import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </ MemoryRouter>
        </StoreProvider>
    );
};
