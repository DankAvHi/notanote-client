import { SquareButton } from '../SquareButton';

type Props = {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
};

export const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  return (
    <dialog
      className={`inset-0 bg-(--white-surface-64) w-full h-full flex items-center justify-center ${!open && 'hidden'}`}
      open={open}
    >
      <section className="p-2 flex flex-col gap-2 bg-(--black-surface) min-w-1/2">
        <nav className="w-full flex justify-end">
          <SquareButton
            onClick={onClose}
            buttonProps={{ className: 'px-2 py-1' }}
          >
            {`Close`}
          </SquareButton>
        </nav>
        <div className="w-full border border-(--white-surface)">{children}</div>
      </section>
    </dialog>
  );
};
