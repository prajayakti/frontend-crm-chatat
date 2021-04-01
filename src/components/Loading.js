import React from "react";
import Wrapper from '../components/Wrapper';


const Loading = () => {
    return (
        <Wrapper>
         <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
        </Wrapper>
    )
}

export default Loading;