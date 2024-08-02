'use client';
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: 'block',
    margin: '100px auto'
};



interface Props {
    loading: any; 
  }

const LoadingPage = ({ loading }: Props) => {
    return (
        <ClipLoader
            color='#3b82f6'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label='Loading Spinner'
            data-testid="loader"

        />
    )
}

export default LoadingPage