export interface BaseContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export default function BaseContainer({ children }: BaseContainerProps) {
  return (
    <div style={{ paddingTop: 'calc(56px + 15px)' }}>
      {children}
    </div>
  );
}