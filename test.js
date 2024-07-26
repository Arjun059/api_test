import querystring from 'query-string';
import { URL } from 'url';

const baseUrl = 'http://localhost:3000';

// Serialize the query parameters using the specified array format
const queryParams = { foo: [1, 2, 3], pazeSize: 10, current: 1 };
const query = querystring.stringify(queryParams, '&', '=', { encodeURIComponent: querystring.unescape });

// Combine the base URL and the serialized query parameters
const fullUrl = `${baseUrl}?${query}`;

// Parse the search parameters from the URL using URLSearchParams
const parsedParams = new URL(fullUrl).searchParams;

console.log(parsedParams.entries(), 'entries ===============');
console.log(parsedParams.getAll('foo'));
console.log(parsedParams.get('pazeSize'));
console.log(parsedParams.get('current'));
console.log(fullUrl);
