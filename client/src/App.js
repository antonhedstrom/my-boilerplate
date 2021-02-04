import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeContext } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import styles from 'turtle-ui';

import './styles/App.scss';

import theme from './theme';
import Topbar from './Containers/Layout/Topbar';
import Main from './Containers/Layout/Main';
import Navigation from './Containers/Layout/Navigation';
import Footer from './Containers/Layout/Footer';
import NotFound from './Containers/Layout/NotFound';

import FirstView from './Containers/FirstView';
import SecondView from './Containers/SecondView';

import BookDetails from './Components/BookDetails';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={theme}>
        <Router>
          <Topbar>
            <Navigation />
          </Topbar>

          <Main className="container">
            <Switch>
              <Route exact path="/">
                <FirstView />
              </Route>

              {/* Somethings */}
              <Route exact path="/view1">
                <FirstView />
              </Route>
              <Route path="/books/:id">
                {({ match }) => <BookDetails id={match.params.id} />}
              </Route>

              {/* Anythings */}
              <Route exact path="/view2">
                <SecondView />
              </Route>

              {/* 404 */}
              <Route>
                <NotFound />
              </Route>
            </Switch>

          </Main>

          <div className="container">
            <hr style={{ marginBottom: 0 }} />
            <Footer />
          </div>
        </Router>
      </ThemeContext.Provider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
