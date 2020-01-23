import { useState, useEffect } from "react";

export const usePromise = (promiseFunction, updateCondition) => {

	const [ response, setResponse ] = useState();
	const [ error, setError ] = useState();

	useEffect(() => {
		promiseFunction()
			.then(setResponse)
			.catch(setError);
	}, updateCondition);

	return [ response, error ];

};
