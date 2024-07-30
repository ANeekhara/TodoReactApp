import { ReactNode, forwardRef, useImperativeHandle, useRef, ForwardRefRenderFunction } from "react";
import { createPortal } from "react-dom";
import { ModalHandle } from "../types/TaskTypes";
import Button from "./Button";

interface ModalProps {
    children: ReactNode;
}

const Modal: ForwardRefRenderFunction<ModalHandle, ModalProps> = ({ children }, ref) => {

    const dialogref = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => ({
        open: () => {
            dialogref.current?.showModal();
        }

    }));
    // Ensure modalRoot is correctly fetched
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        return null; // Return nothing if modalRoot is not found
    }
    return createPortal(
        <dialog ref={dialogref} className="backdrop:bg-stone-900/9 p-4 rounded-md  shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button >Okay</Button>
            </form>
        </dialog>, modalRoot);
};

export default forwardRef(Modal);