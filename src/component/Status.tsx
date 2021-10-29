type  StatusProps ={
    status: 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = '...Loading...'
    }else if(props.status === 'success'){
        message = 'Data Fethced Succesfully'
    }else if(props.status === 'error'){
        message = 'Error fetching Data'
    }
  return (
    <div>
      <h2>status - {message} </h2>
    </div>
  );
};
