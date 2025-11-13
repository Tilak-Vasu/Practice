import ReactDOM from 'react';
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from "./queryClient";
// import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
<QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>
);