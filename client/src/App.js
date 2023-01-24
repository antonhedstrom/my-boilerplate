import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeContext } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import theme from './theme';
import Topbar from './Containers/Layout/Topbar';
import Main from './Containers/Layout/Main';
import Navigation from './Containers/Layout/Navigation';
import Footer from './Containers/Layout/Footer';
import NotFound from './Containers/Layout/NotFound';

import FirstView from './Containers/FirstView';
import SecondView from './Containers/SecondView';

import BookDetails from './Components/BookDetails';
import GlobalStyle from './GlobalStyle';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Topbar>
            <Navigation />
          </Topbar>

          <Main className="container">
            <Routes>
              <Route exact path="/" element={<FirstView />} />

              {/* First view */}
              <Route exact path="/view1" element={<FirstView />} />
              <Route path="/books/:id" element={<BookDetails />} />

              {/* Second view */}
              <Route exact path="/view2" element={<SecondView />} />

              {/* 404 */}
              <Route element={<NotFound />} />

            </Routes>

          </Main>

          <div className="container">
            <hr style={{ marginBottom: 0 }} />
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
