import React from 'react';
import useLocalStorage from 'react-use-localstorage';

export const AppContext = React.createContext({
  name: '',
  radius: '50',
  categories: [] as string[],
  tags: [] as string[],
});

const AppProvider: React.FC = ({ children }) => {
  const [rawData, setRawData] = useLocalStorage('terrace', '');
  const [data, setData] = React.useState({
    name: '',
    radius: '50',
    categories: [] as string[],
    tags: [] as string[],
  });

  React.useEffect(() => {
    // stringify data and set raw data
    const raw = JSON.stringify(data);
    setRawData(raw);
  }, [data]);

  React.useEffect(() => {
    if (rawData) {
      // parse raw data and set data
      const parsed = JSON.parse(rawData);
      setData(parsed);
    }
  }, [rawData]);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useAppContext = () => React.useContext(AppContext);

export default AppProvider;
