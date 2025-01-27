import sassThemeColors from '@energysage/es-bs-base/scss/variables/_theme-colors.scss';

// Possible Component Sizes
export const designStages = ['Atom', 'Molecule', 'Organism', 'Template', 'Page'];

// TODO: font-family values should come from: '@energysage/es-bs-base/scss/_font-family.scss';
const fontFamilies = {
    // eslint-disable-next-line max-len
    fontFamilySansSerif: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontFamilyMonospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};
fontFamilies.fontFamilyBase = fontFamilies.fontFamilySansSerif;

export const bsVariables = {
    ...fontFamilies,
    themeColors: sassThemeColors,
};

export default {
    designStages,
    bsVariables,
};
