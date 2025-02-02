import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient=new QueryClient()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Router>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Router>
    </Provider>
)
