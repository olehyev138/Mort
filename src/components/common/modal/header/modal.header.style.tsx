import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const ModalHeaderWrapper = styled(Box)(({ theme }) => ({
    padding: '20px 28px',
    borderRadius: '16px 16px 0px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.default,
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '33.6px',
    color: theme.palette.text.primary,
}));

export const LikeIcon = styled('img')(({ theme }) => ({
    height: '24px',
    width: '24px',
    cursor: 'pointer',
    background: theme.palette.background.paper,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '12px'
  }));
  
  export const LikeIconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
  }));

  
  export const CrossIconBox = styled(Box)(({theme,themeMode }: any) => ({
    borderRadius: '50%',
    height: '36px',
    width: '36px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeMode === "light" ? "alpha(#03363D, 0.80)" : "#465359",

  }));
  

  export const CrossIcon = styled('img')(({ }) => ({
    height: '24px',
    width: '24px',
    cursor: 'pointer',
  }));
  
  