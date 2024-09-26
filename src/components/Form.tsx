const Form = ({ slots }: { slots: { header: React.ReactNode; footer: React.ReactNode; default: React.ReactNode } }) => (
    <div>
      <div>{slots.header}</div>
      <form>{slots.default}</form>
      <div>{slots.footer}</div>
    </div>
  );
  