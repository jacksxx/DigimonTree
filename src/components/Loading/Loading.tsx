interface LoadingProps {
    message?: string;
  }
  
  const Loading = ({ message = '' }: LoadingProps) => {
    return (
      <>
        <div
          role='alert'
          aria-busy='true'
          aria-live='polite'
          aria-label='loading'
          className='flex items-center justify-center'          
        >
          <span className='animate-spin rounded-full border-t-2 border-solid border-blue-500 p-2 md:p-3 lg:p-4' />
          <p className='ml-2'>{message}</p>
        </div>
      </>
    );
  };
  
  export default Loading;