import { globalStyle, style } from '@vanilla-extract/css';

export const workspaceAndUserWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  width: 'calc(100% + 12px)',
  height: 42,
  paddingRight: 6,
  alignSelf: 'center',
});
export const quickSearchAndNewPage = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '4px 0',
  marginLeft: -8,
  marginRight: -6,
});
export const quickSearch = style({
  width: 0,
  flex: 1,
});

export const workspaceWrapper = style({
  width: 0,
  flex: 1,
});

export const bottomContainer = style({
  gap: 8,
});

export const sidebarUtilityActions = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 4,
  padding: '4px 0',
  containerType: 'inline-size',
  containerName: 'sidebar-utility-actions',
});

export const sidebarUtilityAction = style({
  display: 'grid',
  gridTemplateColumns: '20px minmax(0, 1fr)',
  alignItems: 'center',
  columnGap: 4,
  minWidth: 0,
  width: '100%',
  minHeight: '38px !important',
  height: '38px !important',
  boxSizing: 'border-box',
  justifyContent: 'flex-start',
  gap: 4,
  padding: '0 4px',
  fontSize: 10,
  selectors: {
    '&[data-collapsible="false"]:is([data-active="true"], :hover)': {
      width: '100% !important',
      transform: 'none !important',
      paddingLeft: '4px !important',
      paddingRight: '4px !important',
    },
  },
  '@container': {
    'sidebar-utility-actions (width <= 280px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '22px auto',
      justifyItems: 'center',
      height: '48px !important',
      minHeight: '48px !important',
      padding: '2px',
      rowGap: 2,
    },
  },
});

globalStyle(`${sidebarUtilityActions} > a`, {
  display: 'block',
  width: '100%',
  minWidth: 0,
  marginTop: 4,
});

globalStyle(`${sidebarUtilityAction} > div:first-child`, {
  width: '100%',
  height: '22px',
  flexShrink: 0,
  justifyContent: 'center',
});

globalStyle(`${sidebarUtilityAction} > div:last-child`, {
  width: '100%',
  minWidth: 0,
  overflow: 'visible',
  textAlign: 'left',
});

globalStyle(`${sidebarUtilityAction} > div:last-child > span`, {
  display: 'block',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const sidebarUtilityActionLabel = style({
  display: 'block',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '@container': {
    'sidebar-utility-actions (width <= 280px)': {
      textAlign: 'center',
    },
  },
});
