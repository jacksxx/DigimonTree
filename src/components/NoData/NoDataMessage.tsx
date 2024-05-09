interface NoDataMessageProps {
    message?: string;
  }
  
  const NoDataMessage = ({ message = 'No data available.' }: NoDataMessageProps) => {
    return <h2>{message}</h2>;
  };
  
  export default NoDataMessage;