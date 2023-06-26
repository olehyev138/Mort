import React, { useState } from "react";
import {
  SideNavComponent,
  SideNavIconComponent,
  SideNavIconImageComponent,
  FontComponent,
  HoveredElement,
  SimpleDivider,
  MenuFontComponent,
  DividerBox,
} from "./sidebar.style";
import { useNavigate } from "react-router";
import useSettings from "../../hook/useSettings";
import useCollapse from "../../hook/useCollapsed";
import { useLocation } from "react-router-dom";
import { Box, Tooltip } from "@mui/material";

const SideBar = () => {
  const navigate = useNavigate();
  const { onToggleMode, themeMode } = useSettings();
  const { pathname } = useLocation();
  const { collapsed, handleClick } = useCollapse();

  return (
    <>
      {/* @ts-ignore */}
      <SideNavComponent collapsed={collapsed}>
        {/* @ts-ignore */}
        <SideNavIconComponent
          onClick={() => navigate("/loans")}
          collapsed={collapsed}
          sx={{ marginTop: "12px" }}
        >
          {collapsed ? (
            <Tooltip title="Home" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                {pathname === "/loans" ? (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/home-active.svg"
                        : "/images/svgs/home-dark.svg"
                    }`}
                  />
                ) : (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/home.svg"
                        : "/images/svgs/home-dark.svg"
                    }`}
                  />
                )}
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                {pathname === "/loans" ? (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/home-active.svg"
                        : "/images/svgs/home-dark.svg"
                    }`}
                  />
                ) : (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/home.svg"
                        : "/images/svgs/home-dark.svg"
                    }`}
                  />
                )}
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Home</FontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <DividerBox collapsed={collapsed}>
          {/* @ts-ignore */}
          <SimpleDivider collapsed={collapsed} />
        </DividerBox>
        <SideNavIconComponent
          onClick={() => navigate("/archive")}
          collapsed={collapsed}
        >
          {collapsed ? (
            <Tooltip title="Archive" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                {pathname === "/archive" ? (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/archive-active.svg"
                        : "/images/svgs/collection-dark.svg"
                    }`}
                  />
                ) : (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/archive.svg"
                        : "/images/svgs/collection-dark.svg"
                    }`}
                  />
                )}
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                {pathname === "/archive" ? (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/archive-active.svg"
                        : "/images/svgs/collection-dark.svg"
                    }`}
                  />
                ) : (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/archive.svg"
                        : "/images/svgs/collection-dark.svg"
                    }`}
                  />
                )}
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Archive</FontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <DividerBox collapsed={collapsed}>
          {/* @ts-ignore */}
          <SimpleDivider collapsed={collapsed} />
        </DividerBox>
        <SideNavIconComponent
          onClick={() => onToggleMode()}
          collapsed={collapsed}
        >
          {collapsed ? (
            <Tooltip
              title={themeMode === "light" ? "Dark Mode" : "Light Mode"}
              arrow
              placement="right"
            >
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/moon.svg"
                      : "/images/svgs/moon-dark.svg"
                  }`}
                />
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/moon.svg"
                      : "/images/svgs/moon-dark.svg"
                  }`}
                />
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>
                  {themeMode === "light" ? "Dark Mode" : "Light Mode"}
                </FontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <DividerBox collapsed={collapsed}>
          {/* @ts-ignore */}
          <SimpleDivider collapsed={collapsed} />
        </DividerBox>
        <SideNavIconComponent collapsed={collapsed}>
          {collapsed ? (
            <Tooltip title="Help Center" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/call.svg"
                      : "/images/svgs/call-dark.svg"
                  }`}
                />
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/call.svg"
                      : "/images/svgs/call-dark.svg"
                  }`}
                />
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Help Center</FontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <DividerBox collapsed={collapsed}>
          {/* @ts-ignore */}
          <SimpleDivider collapsed={collapsed} />
        </DividerBox>
        <SideNavIconComponent collapsed={collapsed} onClick={() => navigate('/billing')}>
          {collapsed ? (
            <Tooltip title="Billing" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/invoice.svg"
                      : "/images/svgs/invoice-dark.svg"
                  }`}
                />
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              {pathname === '/billing' ?  <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/invoice-active.svg"
                      : "/images/svgs/invoice-dark.svg"
                  }`}
                />
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Billing</FontComponent>
              </HoveredElement> :  <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/invoice.svg"
                      : "/images/svgs/invoice-dark.svg"
                  }`}
                />
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Billing</FontComponent>
              </HoveredElement>}
             
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <DividerBox collapsed={collapsed}>
          {/* @ts-ignore */}
          <SimpleDivider collapsed={collapsed} />
        </DividerBox>
        <SideNavIconComponent
          onClick={() => navigate("/settings")}
          collapsed={collapsed}
        >
          {collapsed ? (
            <Tooltip title="Settings" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                {pathname === "/account" ? (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/setting-active.svg"
                        : "/images/svgs/setting-dark.svg"
                    }`}
                  />
                ) : (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/settings.svg"
                        : "/images/svgs/setting-dark.svg"
                    }`}
                  />
                )}
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                {pathname === "/account" ? (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/setting-active.svg"
                        : "/images/svgs/setting-dark.svg"
                    }`}
                  />
                ) : (
                  <SideNavIconImageComponent
                    src={`${
                      themeMode === "light"
                        ? "/images/svgs/settings.svg"
                        : "/images/svgs/setting-dark.svg"
                    }`}
                  />
                )}
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Settings</FontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <DividerBox collapsed={collapsed}>
          {/* @ts-ignore */}
          <SimpleDivider collapsed={collapsed} />
        </DividerBox>
        <SideNavIconComponent collapsed={collapsed}>
          {collapsed ? (
            <Tooltip title="Power Ups" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/Group.svg"
                      : "/images/svgs/powerups-dark.svg"
                  }`}
                />
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/Group.svg"
                      : "/images/svgs/powerups-dark.svg"
                  }`}
                />
                {/* @ts-ignore */}
                <FontComponent collapsed={collapsed}>Power Ups</FontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
        {/* @ts-ignore */}
        <SideNavIconComponent
          clicked={collapsed}
          onClick={handleClick}
          sx={{ marginTop: "15vh" }}
          collapsed={collapsed}
        >
          {collapsed ? (
            <Tooltip title="Menu" arrow placement="right">
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/moreOption.svg"
                      : "/images/svgs/moreOption-dark.svg"
                  }`}
                />
              </HoveredElement>
            </Tooltip>
          ) : (
            <>
              {/* @ts-ignore */}
              <HoveredElement themeMode={themeMode} collapsed={collapsed}>
                <SideNavIconImageComponent
                  src={`${
                    themeMode === "light"
                      ? "/images/svgs/moreOption.svg"
                      : "/images/svgs/moreOption-dark.svg"
                  }`}
                />
                {/* @ts-ignore */}
                <MenuFontComponent collapsed={collapsed}>
                  Menu
                </MenuFontComponent>
              </HoveredElement>
            </>
          )}
        </SideNavIconComponent>
      </SideNavComponent>
    </>
  );
};
export default SideBar;
