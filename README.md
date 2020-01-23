# React use-promise

Use React Hooks to resolve a promise; a wrapper around useState and useEffect for data-fetching.

## Installation

```bash
npm i @codefeathers/use-promise
```

## Usage

```JavaScript
import { usePromise } from "@codefeathers/use-promise";

const Search = () => {

	const [ search, setSearch ] = useState("");

	// if the Promise rejects, error is set, otherwise response is set
	const [ response, error ] = usePromise(
		// Function that returns a Promise
		() => fetch(`/api/search?s=${search}`).then(x => x.json()),
		// List of dependencies to watch for
		[ search ],
	);

	return <>
		<input value={search} onChange={e => setSearch(e.target.value)} />
		{error ? <p>There was an error</p> :
			<ol>
				{response.map(each =>
					<li key={each.id}>{each.content}</li>)}
			</ol>
		}
	<>;

};
```
