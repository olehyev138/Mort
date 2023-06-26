import React from "react";
import useSettings from "../../../../hook/useSettings";
import {
    ModalHeaderWrapper, HeaderText, LikeIcon,
    LikeIconWrapper, CrossIcon, CrossIconBox
} from "./modal.header.style";
const ModalHeader = (props: any) => {
    const { themeMode } = useSettings();
    const { showLikeIcon, crossIcon, headerText , handleClose} = props;
    return (
        <>
            <ModalHeaderWrapper>
                <LikeIconWrapper>
                    {showLikeIcon && (<LikeIcon src={`${showLikeIcon}`} />)}
                    {headerText && (<HeaderText>
                        {headerText}
                    </HeaderText>)}
                </LikeIconWrapper>
                {crossIcon && (
                    // @ts-ignore
                <CrossIconBox themeMode={themeMode}>
                    <CrossIcon src={`${themeMode === 'light' ? '/images/svgs/crossIcon.svg' : '/images/svgs/cross-dark.svg'}`} onClick={()=> handleClose()}/>
                </CrossIconBox>)}
            </ModalHeaderWrapper>
        </>
    )
}

export default ModalHeader;