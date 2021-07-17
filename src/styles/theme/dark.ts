import constants from './constants';

export default {
    title: 'dark',
    widthNavBar: constants.sizes.widthNavbar,
    colors: {
        background: constants.colors.black_50,
        scrollbar: constants.colors.black_10,
        text: constants.colors.white_50,
        title: constants.colors.white,
        switchBar: constants.colors.black_60,
        navbar: `linear-gradient(180deg, ${constants.colors.black_60} 0%, ${constants.colors.black_40} 100%);`,
    },
};