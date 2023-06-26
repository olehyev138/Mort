import React from "react";
import { styled } from '@mui/system';
import { Box, Typography, ListItem } from "@mui/material";
import { Divider } from "@mui/material";

export const SideNavComponent = styled(Box)(({ theme, collapsed }: any) => ({
  height: 'calc(100vh - 100px)',
  overflowY: 'auto',
  overflowX: 'hidden',
  minWidth: `${collapsed ? '58px' : '161px'}`,
  background: theme.palette.background.default,
  width: `${collapsed ? '58px' : '161px'}`,
  [theme.breakpoints.down('lg')]: {
    width: `${collapsed ? '50px' : '136px'}`,
  },
  [theme.breakpoints.down('md')]: {
    width: 50
  },
  [theme.breakpoints.down('sm')]: {
    width: `${collapsed ? '50px' : '355px'}`,
    height: '100vh'
  },
}));

export const SideNavIconComponent: any = styled(ListItem)(({ theme , collapsed }: any) => ({
  height: '60px',
  minWidth: `${collapsed ? '58px' : '161px'}`,
  boxShadow: 'none',
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.background.default,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  [theme.breakpoints.down('md')]: {
    minWidth: `${collapsed ? '58px' : '58px'}`,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: `${collapsed ? '75px' : '355px'}`,
    justifyContent: 'start',
    margin: '0px 16px',
  },
}));

export const HoveredElement: any = styled(Box)(({ theme, themeMode, collapsed }: any) => ({
  display: 'flex',
  padding: '8px',
  width: `${collapsed ? '48%' : '80%'}`,
  alignItems: 'center',
  "&:hover": {
    backgroundColor: themeMode === "light" ? "#EEEDE9" : "#7D8A8F",
    borderRadius: '10px',
  },
  [theme.breakpoints.down('md')]: {
    width: '50%',
  },
}))

export const SideNavIconImageComponent: any = styled('img')(({ }) => ({
  height: '28px',
  width: '28px',
  marginRight: '8px',
}));

export const FontComponent = styled(Typography)(({ theme, collapsed }: any) => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px',
  display: `${!collapsed ? 'flex' : 'none'}`,
  alignItems: 'center',
  height: '56px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16.8px',
  },
  // [theme.breakpoints.down('md')]: {
  //   display: 'none'
  // },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },

}));

export const MenuFontComponent = styled(Typography)(({ theme, collapsed }: any) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '19.2px',
  display: `${!collapsed ? 'flex' : 'none'}`,
  alignItems: 'center',
  height: '56px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16.8px',
  },
  // [theme.breakpoints.down('md')]: {
  //   display: 'none'
  // },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },

}));


export const SimpleDivider = styled(Divider)(({ theme, collapsed }: any) => ({
  width: '65%',
  margin:  '12px 0px',
  background: theme.palette.text.primary,
  opacity: 0.2
}));

export const InnerHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%'
}));

export const SideBarWrapper = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 101px)',
  minWidth: 492,
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    height: 'calc(100vh - 81px)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
}));


export const OutletWrapper = styled(Box)(({ theme }) => ({
  minWidth: 'calc(100% - 420px)',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    height: 'calc(100vh - 81px)',
  },
  [theme.breakpoints.down('lg')]: {
    height: 'calc(100vh - 100px)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 84px)',
  },
}));

export const MainWrapper = styled(Box)<any>(({ theme, themeMode }: any) => ({
  background: themeMode === "light" ? theme.palette.background.default : theme.palette.background.default,
}));

export const DrawerMenuIcon = styled('img')(({ }) => ({
  height: '40px',
  width: '40px',
}));

export const SuperAdmin = styled(Typography)(({theme}) => ({
  fontSize: '13px',
  fontWeight:400 , 
  lineHeight: '16.93px',
   fontFamily: 'Roboto Slab', 
   color: theme.palette.text.primary, 
   opacity: '0.8'
}));

export const DividerBox = styled(Box)(({ theme, collapsed }: any) => ({
  display: 'flex',
  justifyContent: `${collapsed ? 'center' : 'start' }`,
  marginLeft: '8px',
}));
