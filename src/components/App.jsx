
import { GlobalStyle } from './Globalstyle';
import { Searchbar } from './Searchbar'
import { Loader } from './Loader'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Searchbar />
      <Loader />
    </div>
  );
};
