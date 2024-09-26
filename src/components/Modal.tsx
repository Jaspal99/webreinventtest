const Modal = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="modal">
      <h2>{title}</h2>
      {children}
    </div>
  );
  
  export default Modal;
  