type Modes = Record<string, boolean | string>

export const classNames = (
    className: string,
    modes: Modes = {},
    additional: string[] = []
): string => {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.keys(modes)
            .filter(key => modes[key])
    ]
        .join(' ');
};
