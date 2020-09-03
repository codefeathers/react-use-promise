import type { DependencyList } from "react";
import { useState, useEffect } from "react";

export const usePromise = <T>(
	promiseFunction: () => PromiseLike<T>,
	defaultState: T,
	dependencies?: DependencyList,
) => {
	const [response, setResponse] = useState(defaultState);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		Promise.resolve(promiseFunction())
			.then(data => {
				setLoading(false);
				setResponse(data);
			})
			.catch(err => {
				setLoading(false);
				setError(err);
			});
	}, dependencies);

	return [response, error, loading] as const;
};
