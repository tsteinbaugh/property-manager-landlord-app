import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import Modal from "./Modal";

const ModalCtx = createContext(null);

export function useModal() {
  const ctx = useContext(ModalCtx);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

export function ModalProvider({ children }) {
  const [stack, setStack] = useState([]);

  const close = useCallback((id) => {
    setStack((s) => s.filter((n) => n.id !== id));
  }, []);

  const closeAll = useCallback(() => setStack([]), []);

  const open = useCallback((content, props) => {
    const id = Math.random().toString(36).slice(2);
    setStack((s) => [...s, { id, content, props }]);
    return id;
  }, []);

  const value = useMemo(() => ({ open, close, closeAll }), [open, close, closeAll]);

  return (
    <ModalCtx.Provider value={value}>
      {children}
      {stack.map(({ id, content, props }) => (
        <Modal key={id} isOpen onClose={() => close(id)} {...props}>
          {content(() => close(id))}
        </Modal>
      ))}
    </ModalCtx.Provider>
  );
}