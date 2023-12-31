import React from "react";
import ModalBox from "../common/modal";
import {
    DeleteModalBody, ModalBodyWrapper, TrashIconModal,
    TrashIconModalWrapper, DeleteModalHeading, SubheadingWrapper,
    SubheadingInner, DeleteModalSubHeading
} from "./allModals.style";
import useSettings from "../../hook/useSettings";

const DeleteModal = ({ openDelete, handleCloseDelete }: any) => {
    const { themeMode } = useSettings();
    return(
    <>
      {/* Modal For delete button */}
            <ModalBox
                open={openDelete}
                handleClose={handleCloseDelete}
                width="535px"
                crossIcon=''
                headerText=''
                cancelButtonText= "Cancel"
                actionButtonText="Delete"
            >
                <ModalBodyWrapper>
                    {/* @ts-ignore */}
                    <TrashIconModalWrapper themeMode={themeMode}>
                        <TrashIconModal alt="Modal Trash" src="/images/svgs/trash-modal.svg" />
                    </TrashIconModalWrapper>
                    <DeleteModalBody>
                         <DeleteModalHeading>Sure you want to delete this item?</DeleteModalHeading>
                    </DeleteModalBody>
                    <SubheadingWrapper>
                        <SubheadingInner>
                            <DeleteModalSubHeading>This action will move the item to the archive, and it can be retrieved later if needed.</DeleteModalSubHeading>
                        </SubheadingInner>
                    </SubheadingWrapper>
                </ModalBodyWrapper>
            </ModalBox>

    </>
    )
}
export default DeleteModal;