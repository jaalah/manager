import {
  Action,
  Border,
  Button,
  Color,
  Dropdown,
  Interaction,
  Select,
} from '@linode/design-language-system';

import { breakpoints } from 'src/foundations/breakpoints';
import { latoWeb } from 'src/foundations/fonts';

import type { ThemeOptions } from '@mui/material/styles';

export const inputMaxWidth = 416;

export const bg = {
  app: Color.Neutrals[5],
  appBar: 'transparent',
  bgAccessRow: Color.Neutrals[5],
  bgAccessRowTransparentGradient: 'rgb(255, 255, 255, .001)',
  bgPaper: Color.Neutrals.White,
  interactionBgPrimary: Interaction.Background.Secondary,
  lightBlue1: Color.Brand[10],
  lightBlue2: Color.Brand[40],
  main: Color.Neutrals[5],
  mainContentBanner: Color.Neutrals[100],
  offWhite: Color.Neutrals[5],
  primaryNavPaper: Color.Neutrals[100],
  tableHeader: Color.Neutrals[10],
  white: Color.Neutrals.White,
} as const;

const primaryColors = {
  dark: Color.Brand[90],
  divider: Color.Neutrals[5],
  headline: Color.Neutrals[100],
  light: Color.Brand[60],
  main: Color.Brand[80],
  text: Color.Neutrals[70],
  white: Color.Neutrals.White,
};

export const color = {
  black: Color.Neutrals.Black,
  blue: Color.Brand[80],
  blueDTwhite: Color.Brand[80],
  border2: Color.Neutrals[40],
  border3: Color.Neutrals[20],
  boxShadow: Color.Neutrals[30],
  boxShadowDark: Color.Neutrals[50],
  buttonPrimaryHover: Button.Primary.Hover.Background,
  disabledText: Color.Neutrals[40],
  drawerBackdrop: 'rgba(255, 255, 255, 0.5)',
  green: Color.Green[70],
  grey1: Color.Neutrals[50],
  grey2: Color.Neutrals[30],
  grey3: Color.Neutrals[40],
  grey4: Color.Neutrals[60],
  grey5: Color.Neutrals[5],
  grey6: Color.Neutrals[30],
  grey7: Color.Neutrals[20],
  grey8: Color.Neutrals[30],
  grey9: Color.Neutrals[5],
  grey10: Color.Neutrals[10],
  headline: primaryColors.headline,
  label: Color.Neutrals[70],
  offBlack: Color.Neutrals[90],
  orange: Color.Amber[70],
  red: Color.Red[70],
  tableHeaderText: 'rgba(0, 0, 0, 0.54)',
  // TODO: `tagButton*` should be moved to component level.
  tagButtonBg: Color.Brand[10],
  tagButtonBgHover: Button.Primary.Hover.Background,
  tagButtonText: Color.Brand[60],
  tagButtonTextHover: Color.Neutrals.White,
  tagIcon: Color.Brand[60],
  tagIconHover: Button.Primary.Default.Text,
  teal: Color.Teal[70],
  white: Color.Neutrals.White,
  yellow: Color.Yellow[70],
} as const;

export const textColors = {
  headlineStatic: Color.Neutrals[100],
  linkActiveLight: Action.Primary.Default,
  linkHover: Action.Primary.Hover,
  tableHeader: Color.Neutrals[60],
  tableStatic: Color.Neutrals[70],
  textAccessTable: Color.Neutrals[70],
} as const;

export const borderColors = {
  borderFocus: Interaction.Border.Focus,
  borderHover: Interaction.Border.Hover,
  borderTable: Color.Neutrals[5],
  borderTypography: Color.Neutrals[30],
  divider: Color.Neutrals[30],
  dividerDark: Color.Neutrals[80],
} as const;

const iconCircleAnimation = {
  '& .circle': {
    fill: primaryColors.main,
    transition: 'fill .2s ease-in-out .2s',
  },
  '& .insidePath *': {
    stroke: 'white',
    transition: 'fill .2s ease-in-out .2s, stroke .2s ease-in-out .2s',
  },
  '& .outerCircle': {
    animation: '$dash 2s linear forwards',
    stroke: primaryColors.dark,
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
  },
};

const iconCircleHoverEffect = {
  '& .circle': {
    fill: primaryColors.main,
  },
  '& .insidePath *': {
    stroke: 'white',
  },
};

// Used for styling html buttons to look like our generic links
const genericLinkStyle = {
  '&:disabled': {
    color: Action.Primary.Disabled,
    cursor: 'not-allowed',
  },
  '&:hover:not(:disabled)': {
    backgroundColor: 'transparent',
    color: Action.Primary.Hover,
    textDecoration: 'underline',
  },
  background: 'none',
  border: 'none',
  color: Action.Primary.Default,
  cursor: 'pointer',
  font: 'inherit',
  minWidth: 0,
  padding: 0,
};

// Used for styling status pills as seen on Linodes
const genericStatusPillStyle = {
  '&:before': {
    borderRadius: '50%',
    content: '""',
    display: 'inline-block',
    height: 16,
    marginRight: 8,
    minWidth: 16,
    width: 16,
  },
  backgroundColor: 'transparent',
  color: textColors.tableStatic,
  fontFamily: latoWeb.bold,
  fontSize: '1rem',
  padding: 0,
};

const genericTableHeaderStyle = {
  '&:hover': {
    '& span': {
      color: textColors.linkActiveLight,
    },
    cursor: 'pointer',
  },
};

const visuallyVisible = {
  clip: 'none',
  height: 'auto',
  overflow: 'initial',
  /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
  position: 'relative',
  width: 'auto',
};

const visuallyHidden = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  overflow: 'hidden',
  /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
  position: 'absolute !important',
  width: 1,
};

const graphTransparency = '0.7';

const spacing = 8;

export const lightTheme: ThemeOptions = {
  addCircleHoverEffect: {
    ...iconCircleHoverEffect,
  },
  animateCircleIcon: {
    ...iconCircleAnimation,
  },
  applyLinkStyles: {
    ...genericLinkStyle,
  },
  applyStatusPillStyles: {
    ...genericStatusPillStyle,
  },
  applyTableHeaderStyles: {
    ...genericTableHeaderStyle,
  },
  bg,
  borderColors,
  breakpoints,
  color,
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '& .actionPanel': {
            paddingBottom: 12,
            paddingLeft: 16,
          },
          '&:before': {
            display: 'none',
          },
          flexBasis: '100%',
          width: '100%',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          padding: 16,
          paddingTop: 0,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
        root: {
          '& h3': {
            transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          '& svg': {
            fill: Color.Brand[80],
            stroke: Color.Brand[80],
          },
          '&.Mui-expanded': {
            '& .caret': {
              transform: 'rotate(0deg)',
            },
            margin: 0,
            minHeight: 48,
          },
          '&:hover': {
            '& h3': {
              color: primaryColors.light,
            },
          },
          backgroundColor: 'transparent',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'inherit',
        },
        root: {
          backgroundColor: bg.bgPaper,
          borderLeft: 0,
          borderTop: 0,
          color: primaryColors.text,
          position: 'relative',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        endAdornment: {
          '.MuiAutocomplete-clearIndicator': {
            visibility: 'visible !important',
          },
          '.MuiAutocomplete-popupIndicator': {
            svg: {
              ':hover': {
                opacity: 1,
              },
              fontSize: '28px',
              opacity: 0.5,
            },
          },
          paddingRight: 4,
          svg: {
            color: Color.Neutrals[40],
          },
          top: 'unset',
        },
        groupLabel: {
          fontFamily: latoWeb.bold,
          fontSize: '1rem',
          lineHeight: 'unset',
          padding: '8px',
        },
        hasPopupIcon: {
          '&.MuiAutocomplete-root': {
            '& .MuiAutocomplete-inputRoot': {
              paddingRight: '34px',
            },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
          },
          '&::selection': {
            backgroundColor: color.grey7,
          },
        },
        inputRoot: {
          paddingLeft: 8,
        },
        listbox: {
          backgroundColor: bg.white,
          border: `1px solid ${primaryColors.main}`,
          padding: '4px',
        },
        loading: {
          border: `1px solid ${primaryColors.main}`,
        },
        noOptions: {
          border: `1px solid ${primaryColors.main}`,
          borderTop: 0,
        },
        option: {
          '&.Mui-focused, :hover': {
            backgroundColor: `${primaryColors.main} !important`,
            color: primaryColors.white,
            transition: 'background-color 0.2s',
          },
          fontSize: '0.9rem',
          padding: '10px !important',
        },
        popper: {
          // To remove the double border of listbox and input
          '&.MuiAutocomplete-popper': {
            '&[data-popper-placement="bottom"]': {
              '.MuiAutocomplete-listbox': {
                borderTop: 0,
              },
            },
            '&[data-popper-placement="top"]': {
              '.MuiAutocomplete-listbox': {
                borderBottom: 0,
              },
            },
          },
        },
        root: {
          maxWidth: inputMaxWidth,
        },
        tag: {
          '&:not(.MuiChip-root)': {
            borderRadius: '4px',
            padding: '4px',
          },
          '.MuiChip-deleteIcon': {
            ':hover': {
              backgroundColor: primaryColors.main,
              color: primaryColors.white,
            },
            borderRadius: '50%',
            color: primaryColors.text,
            fontSize: '16px',
            margin: '0 4px',
          },

          backgroundColor: bg.lightBlue1,
          padding: '12px 2px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: 'unset',
          color: Color.Neutrals[40], // TODO: This was the closest color according to our palette
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        invisible: {
          backgroundColor: 'transparent',
        },
        root: {
          backgroundColor: color.drawerBackdrop,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          // TODO: We can remove this after migration since we can define variants
          '&.loading': {
            backgroundColor: primaryColors.text,
          },
          '&:active': {
            backgroundColor: Button.Primary.Pressed.Background,
          },
          '&:disabled': {
            backgroundColor: Button.Primary.Disabled.Background,
            color: Button.Primary.Disabled.Text,
          },
          '&:hover, &:focus': {
            backgroundColor: Button.Primary.Hover.Background,
            color: Button.Primary.Default.Text,
          },
          '&[aria-disabled="true"]': {
            backgroundColor: Button.Primary.Disabled.Background,
            color: Button.Primary.Disabled.Text,
          },
          backgroundColor: Button.Primary.Default.Background,
          color: Button.Primary.Default.Text,
          padding: '2px 20px',
        },
        containedSecondary: {
          // TODO: We can remove this after migration since we can define variants
          '&.loading': {
            color: primaryColors.text,
          },
          '&:active': {
            backgroundColor: 'transparent',
            borderColor: Button.Secondary.Pressed.Text,
            color: Button.Secondary.Pressed.Text,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            borderColor: Button.Secondary.Disabled.Text,
            color: Button.Secondary.Disabled.Text,
          },
          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            color: Button.Secondary.Hover.Text,
          },
          '&[aria-disabled="true"]': {
            color: '#c9cacb',
          },
          backgroundColor: 'transparent',
          color: Button.Secondary.Default.Text,
        },
        outlined: {
          '&:hover, &:focus': {
            backgroundColor: Color.Neutrals[5],
            border: `1px solid ${Border.Normal}`,
            color: Color.Brand[80],
          },
          '&[aria-disabled="true"]': {
            backgroundColor: 'transparent',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            color: 'rgba(0, 0, 0, 0.26)',
          },
          backgroundColor: 'transparent',
          border: `1px solid ${primaryColors.main}`,
          color: textColors.linkActiveLight,
          minHeight: 34,
        },
        root: {
          '&[aria-disabled="true"]': {
            cursor: 'not-allowed',
          },
          border: 'none',
          borderRadius: 1,
          cursor: 'pointer',
          fontFamily: latoWeb.bold,
          fontSize: '1rem',
          lineHeight: 1,
          minHeight: 34,
          minWidth: 105,
          textTransform: 'capitalize',
          transition: 'none',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&[aria-disabled="true"]': {
            '& .MuiSvgIcon-root': {
              fill: Button.Primary.Disabled.Icon,
            },
            cursor: 'not-allowed',
          },
          fontSize: '1rem',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        content: {
          // This is necessary for text to ellipsis responsively without the need for a hard set width value that won't play well with flexbox.
          minWidth: 0,
        },
        root: {
          backgroundColor: Color.Neutrals[5],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: Color.Neutrals[40],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        clickable: {
          '&:focus': {
            bbackgroundColor: Color.Brand[40], // TODO: This was the closest color according to our palette
          },
          '&:hover': {
            bbackgroundColor: Color.Brand[40], // TODO: This was the closest color according to our palette
          },
          backgroundColor: Color.Brand[10], // TODO: This was the closest color according to our palette
        },
        colorError: {
          background: Color.Red[70],
          color: color.white,
        },
        colorPrimary: {
          color: color.white,
        },
        colorSecondary: {
          color: color.white,
        },
        colorSuccess: {
          background: Color.Green[70],
          color: color.white,
        },
        deleteIcon: {
          color: primaryColors.text,
          margin: 0,
          padding: 2,
        },
        label: {
          alignItems: 'center',
          display: 'flex',
          height: 'inherit',
          justifyContent: 'center',
          paddingLeft: 4,
          paddingRight: 4,
          width: '100%',
        },
        labelSmall: {
          paddingLeft: 4,
          paddingRight: 4,
        },
        outlined: {
          backgroundColor: 'transparent',
          borderRadius: 1,
        },
        root: {
          '&:focus': {
            outline: `1px dotted ${Color.Neutrals[60]}`,
          },
          '&:last-child': {
            marginRight: 0,
          },
          alignItems: 'center',
          borderRadius: 4,
          color: primaryColors.text,
          display: 'inline-flex',
          fontSize: '.8rem',
          height: 20,
          marginBottom: 2,
          marginRight: 4,
          marginTop: 2,
          paddingLeft: 2,
          paddingRight: 2,
        },
        sizeSmall: {
          fontSize: '.65rem',
          height: 20,
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
      },
      styleOverrides: {
        circle: {
          strokeLinecap: 'inherit',
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: `0 0 5px ${Color.Neutrals[50]}`, // TODO: This was the closest color according to our palette
          [breakpoints.down('sm')]: {
            margin: 24,
            maxHeight: 'calc(100% - 48px)',
            maxWidth: '100% !important',
          },
        },
        paperScrollPaper: {
          maxHeight: 'calc(100% - 48px)',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& .actionPanel': {
            padding: 0,
          },
          justifyContent: 'flex-start',
          margin: 0,
          padding: 24,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          '& h2': {
            lineHeight: 1.2,
          },
          borderBottom: `1px solid ${Color.Neutrals[20]}`,
          color: primaryColors.headline,
          marginBottom: 20,
          padding: '16px 24px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: borderColors.divider,
          marginBottom: spacing,
          marginTop: spacing,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxShadow: `0 0 5px ${Color.Neutrals[50]}`, // TODO: This was the closest color according to our palette
          /** @todo This is breaking typing. */
          // overflowY: 'overlay',
          display: 'block',
          fallbacks: {
            overflowY: 'auto',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.copy > div': {
            backgroundColor: Color.Neutrals[5],
          },
          [breakpoints.down('xs')]: {
            width: '100%',
          },
          marginTop: 16,
          minWidth: 120,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: primaryColors.text,
        },
        root: {
          marginLeft: -11,
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '&[role="radiogroup"]': {
            marginBottom: 16,
            marginTop: 8,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&$error': {
            color: Select.Error.HintText,
          },
          fontSize: '0.875rem',
          lineHeight: 1.25,
          maxWidth: 415,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&$disabled': {
            color: Color.Neutrals[70],
            opacity: 0.5,
          },
          '&$error': {
            color: Color.Neutrals[70],
          },
          '&.Mui-focused': {
            color: Color.Neutrals[70],
          },
          color: Color.Neutrals[70],
          fontFamily: latoWeb.bold,
          fontSize: '.875rem',
          marginBottom: 8,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'large',
      },
      styleOverrides: {
        edgeEnd: {
          marginRight: 0,
        },
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
            color: primaryColors.main,
          },
        },
      },
    },
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        disabled: {},
        error: {},
        focused: {},
        formControl: {
          'label + &': {
            marginTop: 0,
          },
        },
        input: {
          '&::placeholder': {
            color: Color.Neutrals[50],
          },
          boxSizing: 'border-box',
          [breakpoints.only('xs')]: {
            fontSize: '1rem',
          },
          fontSize: '0.9rem',
          padding: 8,
        },
        inputMultiline: {
          lineHeight: 1.4,
          minHeight: 125,
          padding: '9px 12px',
        },
        root: {
          '& svg': {
            '&:hover': {
              color: Color.Brand[60],
            },
            color: primaryColors.main,
            fontSize: 18,
          },
          '&.Mui-disabled': {
            backgroundColor: '#f4f4f4',
            borderColor: Color.Neutrals[40],
            color: 'rgba(0, 0, 0, 0.75)',
            input: {
              cursor: 'not-allowed',
            },
            opacity: 0.5,
          },
          '&.Mui-error': {
            borderColor: Interaction.Border.Error,
          },
          '&.Mui-focused': {
            '& .select-option-icon': {
              paddingLeft: `30px !important`,
            },
            borderColor: primaryColors.main,
            boxShadow: `0 0 2px 1px ${Color.Neutrals[30]}`,
          },
          '&.affirmative': {
            borderColor: Color.Green[70],
          },
          alignItems: 'center',
          backgroundColor: Color.Neutrals.White,
          border: `1px solid ${Color.Neutrals[40]}`,
          boxSizing: 'border-box',
          [breakpoints.down('xs')]: {
            maxWidth: '100%',
            width: '100%',
          },
          color: primaryColors.text,
          lineHeight: 1,
          maxWidth: inputMaxWidth,
          minHeight: 34,
          transition: 'border-color 225ms ease-in-out',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionEnd: {
          marginRight: 10,
        },
        root: {
          '& p': {
            [breakpoints.only('xs')]: {
              fontSize: '1rem',
            },
            color: Color.Neutrals[70],
            fontSize: '0.9rem',
          },
          [breakpoints.only('xs')]: {
            fontSize: '1rem',
          },
          color: Color.Neutrals[70],
          fontSize: '0.9rem',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
          },
          height: 'auto',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          position: 'relative',
        },
        shrink: {
          transform: 'none',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: Color.Brand[40], // TODO: This was the closest color according to our palette
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingBottom: 0,
          paddingTop: 0,
        },
        root: {
          '&.reset': {
            '& li': {
              display: 'list-item',
              listStyleType: 'initial',
              padding: 0,
            },
            listStyle: 'initial',
            margin: 'inherit',
            padding: 'inherit',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        disabled: {},
        root: {
          '&$disabled': {
            opacity: 0.5,
          },
          '&$selected, &$selected:hover': {
            backgroundColor: 'transparent',
            color: primaryColors.main,
          },
          '&.selectHeader': {
            color: primaryColors.text,
            fontFamily: latoWeb.bold,
            fontSize: '1rem',
            opacity: 1,
          },
          color: primaryColors.text,
        },
        selected: {},
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginBottom: 0,
          marginTop: 0,
        },
        secondary: {
          lineHeight: '1.2em',
          marginTop: 4,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          '& .selectMenuList': {
            '& li': {
              paddingLeft: 10,
              paddingRight: 10,
            },
            boxSizing: 'content-box',
            [breakpoints.down('xs')]: {
              minWidth: 200,
            },
            maxHeight: 250,
            maxWidth: 200,
            overflowX: 'hidden',
            overflowY: 'auto',
            padding: 4,
          },
          '&.selectMenuDropdown': {
            border: `1px solid ${primaryColors.main}`,
            borderRadius: 0,
            boxShadow: 'none',
            boxSizing: 'content-box',
            margin: '0 0 0 -1px',
            outline: 0,
            position: 'absolute',
          },
          borderLeft: 0,
          borderRight: 0,
          maxWidth: 350,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.loading': {
            backgroundColor: primaryColors.text,
          },
          '&:active': {
            backgroundColor: Dropdown.Background.Default,
          },
          '&:disabled': {
            backgroundColor: Dropdown.Background.Default,
            color: Dropdown.Text.Disabled,
          },
          '&:hover, &:focus': {
            backgroundColor: Dropdown.Background.Hover,
            color: Dropdown.Text.Default,
          },
          '&:last-child)': {
            borderBottom: 0,
          },
          '&[aria-disabled="true"]': {
            backgroundColor: Dropdown.Background.Default,
            color: Dropdown.Text.Disabled,
            opacity: 1,
          },
          backgroundColor: Dropdown.Background.Default,
          color: Dropdown.Text.Default,
          padding: '10px 10px 10px 16px',
        },
        selected: {},
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          border: `1px solid ${Color.Neutrals[30]}`,
        },
        root: {},
        rounded: {
          borderRadius: 0,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          boxShadow: `0 2px 6px 0 rgba(0, 0, 0, 0.18)`, // TODO: Fix Elevation.S to remove `inset`
          [breakpoints.up('lg')]: {
            minWidth: 250,
          },
          minWidth: 200,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        checked: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
        colorSecondary: {
          '&$checked': {
            '&:hover': {
              backgroundColor: 'rgba(36, 83, 233, 0.04)',
            },
            color: primaryColors.main,
          },
          '&:hover': {
            backgroundColor: 'rgba(36, 83, 233, 0.04)',
          },
          color: primaryColors.main,
        },
        root: ({ theme }) => ({
          '& $checked': {
            color: primaryColors.main,
          },
          '& .defaultFill': {
            fill: theme.color.white,
            transition: theme.transitions.create(['fill']),
          },
          '&.Mui-disabled': {
            '& .defaultFill': {
              fill: Color.Neutrals[5],
            },
            color: `${Color.Neutrals[40]} !important`,
            fill: `${Color.Neutrals[5]} !important`,
            pointerEvents: 'none',
          },
          '&:hover': {
            '& .defaultFill': {
              fill: theme.color.white,
            },
            color: theme.palette.primary.main,
            fill: theme.color.white,
          },
          color: Color.Neutrals[40],
          padding: '10px 10px',
          transition: theme.transitions.create(['color']),
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        disabled: {},
        icon: {
          color: `${Color.Neutrals[50]} !important`,
          height: 28,
          marginRight: 4,
          marginTop: -2,
          opacity: 0.5,
          transition: 'color 225ms ease-in-out',
          width: 28,
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        text: {
          borderRadius: 0,
          marginTop: 0,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderLeft: `6px solid transparent`,
          borderRadius: 4,
          boxShadow: `0 0 5px ${Color.Neutrals[30]}`,
          color: Color.Neutrals[70],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 24,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        checked: {},
        disabled: {},
        root: {
          '& $checked': {
            '& .square': {
              fill: 'white',
            },
            // color: `${primaryColors.main} !important`,
            '& input': {
              left: -20,
            },
            '&$switchBase': {
              '& + $track': {
                opacity: 1,
              },
            },
          },
          '& $disabled': {
            '&$switchBase': {
              '& + $track': {
                backgroundColor: Color.Neutrals[30],
                borderColor: Color.Neutrals[40],
              },
              '& .square': {
                fill: 'white',
              },
            },
          },
          '& .icon': {
            borderRadius: 1,
            height: 16,
            left: 0,
            position: 'relative',
            transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            width: 16,
          },
          '& .square': {
            fill: 'white',
            transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          '&:hover, &:focus': {
            '& $checked': {
              '& + $track': {
                opacity: 1,
              },
            },
          },
          '.MuiSwitch-track': {
            opacity: '1 !important',
          },
          height: 48,
          width: 68,
        },
        switchBase: {
          '&$checked': {
            transform: 'translateX(20px)',
          },
          '&.Mui-disabled': {
            '& +.MuiSwitch-track': {
              backgroundColor: Color.Neutrals[30],
              borderColor: Color.Neutrals[40],
            },
          },
          color: primaryColors.main,
          padding: 16,
        },
        track: {
          backgroundColor: Color.Neutrals[40],
          borderRadius: 1,
          boxSizing: 'content-box',
          height: 24,
          left: 12,
          marginLeft: 0,
          marginTop: 0,
          opacity: 1,
          top: 12,
          transition: 'border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          width: 44,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&$selected, &$selected:hover': {
            color: primaryColors.headline,
            fontFamily: latoWeb.bold,
          },
          '&:hover': {
            color: primaryColors.main,
          },
          alignItems: 'center',
          appearance: 'none',
          boxSizing: 'border-box',
          [breakpoints.up('md')]: {
            minWidth: 75,
          },
          color: 'rgba(0, 0, 0, 0.54)',
          display: 'inline-flex',
          flexShrink: 0,
          justifyContent: 'center',
          lineHeight: 1.3,
          margin: 1,
          maxWidth: '264',
          minHeight: 48,
          minWidth: 50,
          overflow: 'hidden',
          padding: '6px 16px',
          position: 'relative',
          textTransform: 'inherit',
          verticalAlign: 'middle',
        },
        selected: {},
        textColorPrimary: {
          '&$selected': {
            color: Color.Neutrals[100],
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: `1px solid ${borderColors.borderTable}`,
          borderBottom: 0,
          borderCollapse: 'initial',
          borderTop: 0,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          fontSize: '.9rem',
        },
        head: {
          fontSize: '.9rem',
          height: 46,
          lineHeight: 1.1,
        },
        root: {
          borderBottom: `1px solid ${primaryColors.divider}`,
          borderTop: `1px solid ${primaryColors.divider}`,
          padding: 10,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          backgroundColor: Color.Neutrals[5],
          height: 'auto',
        },
        hover: {
          '& a': {
            color: primaryColors.text,
          },
          '& a.secondaryLink': {
            '&:hover': {
              textDecoration: 'underline',
            },
            color: primaryColors.main,
          },
          cursor: 'pointer',
        },
        root: {
          '&:hover, &:focus': {
            backgroundColor: Color.Neutrals[5],
          },
          backfaceVisibility: 'hidden',
          backgroundColor: primaryColors.white,
          height: 40,
          position: 'relative',
          zIndex: 1,
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        icon: {
          color: 'inherit !important',
          marginTop: 2,
          opacity: 1,
        },
        iconDirectionAsc: {
          transform: 'rotate(0deg)',
        },
        iconDirectionDesc: {
          transform: 'rotate(180deg)',
        },
        root: {
          '&:focus': {
            outline: `1px dotted ${Color.Neutrals[60]}`,
          },
          '&:hover': {
            color: primaryColors.main,
          },
          fontSize: '.9rem',
          lineHeight: '1.1rem',
          transition: 'color 225ms ease-in-out',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        fixed: {
          overflowX: 'auto',
        },
        indicator: {
          primary: {
            backgroundColor: primaryColors.main,
          },
          secondary: {
            backgroundColor: primaryColors.main,
          },
        },
        root: {
          '& $scrollButtons:first-of-type': {
            '& svg': {
              backgroundColor: 'rgba(232, 232, 232, .9)',
              borderRadius: '50%',
              height: 39,
              padding: '7px 4px',
              width: 38,
            },
            bottom: 6,
            left: 0,
            position: 'absolute',
            zIndex: 2,
          },
          '& $scrollButtons:last-child': {
            '& svg': {
              backgroundColor: 'rgba(232, 232, 232, .9)',
              borderRadius: '50%',
              height: 39,
              padding: '7px 4px',
              width: 38,
            },
          },
          boxShadow: `inset 0 -1px 0 ${Color.Neutrals[40]}`,
          margin: '16px 0',
          minHeight: 48,
          position: 'relative',
        },
        scrollButtons: {
          flex: '0 0 40px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          opacity: 1,
        },
        tooltip: {
          backgroundColor: 'white',
          borderRadius: 0,
          boxShadow: `0 0 5px ${Color.Neutrals[50]}`, // TODO: This was the closest color according to our palette
          [breakpoints.up('sm')]: {
            fontSize: '.9rem',
            padding: '8px 10px',
          },
          color: Color.Neutrals[70],
          maxWidth: 200,
          textAlign: 'left',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          '&$colorSecondary': {
            '&:active': {
              backgroundColor: 'transparent',
              color: primaryColors.light,
            },
            '&:hover, &:focus': {
              backgroundColor: 'transparent !important',
              color: primaryColors.light,
            },
            backgroundColor: 'transparent',
            color: primaryColors.main,
          },
          '&:active': {
            backgroundColor: primaryColors.light,
          },
          '&:hover, &:focus': {
            backgroundColor: primaryColors.light,
          },
          backgroundColor: primaryColors.main,
          border: 'none',
          borderRadius: '3px',
          [breakpoints.down('sm')]: {
            marginLeft: 8,
            maxHeight: 34,
            minWidth: 100,
          },
          color: Color.Neutrals.White,
          cursor: 'pointer',
          fontFamily: latoWeb.bold,
          fontSize: '1rem',
          lineHeight: 1,
          maxHeight: 34,
          minHeight: `34px`,
          padding: `8px 20px`,
          position: 'relative',
          textTransform: 'inherit',
        },
      },
    },
  },
  font: {
    bold: latoWeb.bold,
    normal: latoWeb.normal,
  },
  graphs: {
    aborted: {
      clients: `rgba(214, 0, 0, ${graphTransparency})`,
      connections: `rgba(255, 10, 10, ${graphTransparency})`,
    },
    blue: `rgba(100, 173, 246, ${graphTransparency})`,
    connections: {
      accepted: `rgba(91, 105, 139, ${graphTransparency})`,
      handled: `rgba(50, 59, 77, ${graphTransparency})`,
    },
    cpu: {
      percent: `rgba(54, 131, 220, ${graphTransparency})`,
      system: `rgba(2, 118, 253, ${graphTransparency})`,
      user: `rgba(81, 166, 245, ${graphTransparency})`,
      wait: `rgba(145, 199, 237, ${graphTransparency})`,
    },
    darkGreen: `rgba(16, 162, 29, ${graphTransparency})`,
    diskIO: {
      read: `rgba(255, 196, 105, ${graphTransparency})`,
      swap: `rgba(238, 44, 44, ${graphTransparency})`,
      write: `rgba(255, 179, 77, ${graphTransparency})`,
    },
    green: `rgba(91, 215, 101, ${graphTransparency})`,
    inodes: `rgba(224, 138, 146, ${graphTransparency})`,
    lightGreen: `rgba(49, 206, 62, ${graphTransparency})`,
    load: `rgba(255, 220, 77, ${graphTransparency})`,
    memory: {
      buffers: `rgba(142, 56, 142, ${graphTransparency})`,
      cache: `rgba(205, 150, 205, ${graphTransparency})`,
      swap: `rgba(238, 44, 44, ${graphTransparency})`,
      used: `rgba(236, 200, 236, ${graphTransparency})`,
    },
    orange: `rgba(255, 179, 77, ${graphTransparency})`,
    processCount: `rgba(113, 86, 245, ${graphTransparency})`,
    purple: `rgba(217, 176, 217, ${graphTransparency})`,
    queries: {
      delete: `rgba(2, 54, 59, ${graphTransparency})`,
      insert: `rgba(26, 151, 162, ${graphTransparency})`,
      select: `rgba(34, 192, 206, ${graphTransparency})`,
      update: `rgba(19, 110, 118, ${graphTransparency})`,
    },
    ram: `rgba(224, 131, 224, ${graphTransparency})`,
    red: `rgba(255, 99, 60, ${graphTransparency})`,
    requests: `rgba(34, 206, 182, ${graphTransparency})`,
    slowQueries: `rgba(255, 61, 61, ${graphTransparency})`,
    space: `rgba(255, 99, 61, ${graphTransparency})`,
    workers: {
      DNSLookup: `rgba(143, 133, 218, ${graphTransparency})`,
      cleanup: `rgba(152, 97, 189, ${graphTransparency})`,
      closing: `rgba(145, 124, 211, ${graphTransparency})`,
      finishing: `rgba(149, 106, 196, ${graphTransparency})`,
      keepAlive: `rgba(141, 143, 225, ${graphTransparency})`,
      logging: `rgba(147, 115, 203, ${graphTransparency})`,
      reading: `rgba(137, 161, 240, ${graphTransparency})`,
      sending: `rgba(139, 152, 233, ${graphTransparency})`,
      starting: `rgba(135, 170, 247, ${graphTransparency})`,
      waiting: `rgba(133, 180, 255, ${graphTransparency})`,
      writing: `rgba(32, 131, 75, ${graphTransparency})`,
    },
    yellow: `rgba(255, 220, 125, ${graphTransparency})`,
  },
  inputStyles: {
    default: {
      backgroundColor: Select.Default.Background,
      border: `1px solid ${Color.Neutrals[40]}`, // TODO: This should convert to token in future
      color: Select.Default.Text,
    },
    disabled: {
      '& svg': {
        color: Select.Disabled.Icon,
      },
      backgroundColor: Select.Disabled.Background,
      border: `1px solid ${Select.Disabled.Border}`,
      color: Select.Disabled.Text,
    },
    error: {
      '& svg': {
        color: Select.Error.Icon,
      },
      backgroundColor: Select.Error.Background,
      border: `1px solid ${Select.Error.Border}`,
      color: Select.Error.Text,
    },
    focused: {
      '& svg': {
        color: Select.Focus.Icon,
      },
      backgroundColor: Select.Focus.Background,
      border: `1px solid ${Select.Focus.Border}`,
      boxShadow: `0 0 2px 1px ${Color.Neutrals[30]}`,
      color: Select.Focus.Text,
    },
    hover: {
      '& svg': {
        color: Select.Hover.Icon,
      },
      backgroundColor: Select.Hover.Background,
      border: `1px solid ${Color.Neutrals[40]}`, // TODO: This should convert to token in future
      color: Select.Hover.Text,
    },
  },
  name: 'light', // @todo remove this because we leverage pallete.mode now
  palette: {
    background: {
      default: bg.app,
    },
    divider: primaryColors.divider,
    error: {
      dark: Color.Red[70],
      light: Color.Red[10],
      main: Color.Red[40],
    },
    info: {
      dark: Color.Ultramarine[70],
      light: Color.Ultramarine[10],
      main: Color.Ultramarine[40],
    },
    mode: 'light',
    primary: primaryColors,
    secondary: primaryColors,
    success: {
      dark: Color.Green[70],
      light: Color.Green[10],
      main: Color.Green[40],
    },
    text: {
      primary: primaryColors.text,
    },
    warning: {
      dark: Color.Amber[70],
      light: Color.Amber[10],
      main: Color.Amber[40],
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  spacing,
  textColors,
  typography: {
    body1: {
      color: primaryColors.text,
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
    },
    caption: {
      color: primaryColors.text,
      fontSize: '0.625rem',
      lineHeight: '0.625rem',
    },
    fontFamily: latoWeb.normal,
    fontSize: 16,
    h1: {
      [breakpoints.up('lg')]: {
        fontSize: '1.5rem',
        lineHeight: '1.875rem',
      },
      color: primaryColors.headline,
      fontFamily: latoWeb.bold,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    h2: {
      color: primaryColors.headline,
      fontFamily: latoWeb.bold,
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
    h3: {
      color: primaryColors.headline,
      fontFamily: latoWeb.bold,
      fontSize: '1rem',
      lineHeight: '1.4rem',
    },
    subtitle1: {
      color: primaryColors.text,
      fontSize: '1.075rem',
      lineHeight: '1.5rem',
    },
  },
  visually: {
    hidden: visuallyHidden,
    visible: visuallyVisible,
  },
};
