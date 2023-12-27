import React from 'react';
import { RoutePath } from 'shared/config/routes/routes';
import MainIcon from 'shared/assets/icons/Main.svg';
import AboutIcon from 'shared/assets/icons/About.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About us'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile'
    }
];
