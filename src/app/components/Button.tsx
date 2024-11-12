 //button creator
 "use client"; 
interface buttonProps {
    
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    className: string;
    children: React.ReactNode;
  }

const Buttoner = (props : buttonProps) => {
    
    return (
      <button className= {props.className}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  };

export default Buttoner;
