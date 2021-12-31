import { Routes, Route } from 'react-router-dom';

import { Header } from './components/ui';
import { FriendsPage } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FriendsPage />}>
          <Route path="*" element={<FriendsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
