import React from "react";
import {ButtonWrapperComponent, NewDocButton, ReSyncLoanButton, ResyncLoanText} from './topButton.style'
import useSettings from "../../../../hook/useSettings";
const TopButton = ()=>
{
    const { themeMode } = useSettings();
    return(
        <>  
        <ButtonWrapperComponent>
            {/* @ts-ignore */}
            <NewDocButton themeMode={themeMode}>
                <ResyncLoanText sx={{ textTransform: 'capitalize' }}>
                    New Document
                </ResyncLoanText>
            </NewDocButton>
            <ReSyncLoanButton>
                <ResyncLoanText sx={{ textTransform: 'capitalize' }}>
                    Resync Loan
                </ResyncLoanText>
            </ReSyncLoanButton>
        </ButtonWrapperComponent>

        </>
    )
};
export default TopButton;