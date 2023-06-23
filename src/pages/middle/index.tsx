import React, { useRef, useEffect } from "react";
import InnerSideNav from '../../layouts/innerSideBar';
import {
    MainWrapper, InnerSideWrapper, CardWrapper, CardWrapperMain
    , CardContentWrapper, CardTitle, 
} from "../settings/settings.style";
import { IntegrationPageBg } from "./integration.style";
import useSettings from "../../hook/useSettings";
import useCollapse from "../../hook/useCollapsed";
import { useAuth0 } from "@auth0/auth0-react";


const MiddlePage = (props:any) => {
    const { loginWithRedirect , isAuthenticated, user, logout } = useAuth0();
    const { themeMode } = useSettings();
    const {collapsed} = useCollapse()
    return (
        <MainWrapper>
            <InnerSideWrapper>
                <InnerSideNav />
            </InnerSideWrapper>
            {/*@ts-ignore  */}
            <IntegrationPageBg themeMode={themeMode} collapsed={collapsed}>
                <CardWrapperMain>
                    <CardWrapper>
                        <CardContentWrapper >
                            <CardTitle> Coming Soon </CardTitle>
                        </CardContentWrapper>
                    </CardWrapper>
                </CardWrapperMain>
            </IntegrationPageBg>
        </MainWrapper>
    )
}

export default MiddlePage;