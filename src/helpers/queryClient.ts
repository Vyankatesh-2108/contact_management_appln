// src/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

/**
 * Create a new instance of the QueryClient from the @tanstack/react-query library.
 * The QueryClient is used to interact with the react-query cache and manage the state of queries.
 * @constant {QueryClient} queryClient
 */
const queryClient = new QueryClient();

export default queryClient;