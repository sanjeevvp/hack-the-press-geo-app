import { FilterData } from '../types';
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import useLocalStorage from 'react-use-localstorage';

export const AppContext = React.createContext({
  name: '',
  radius: '1500',
  categories: [] as string[],
  tags: [] as string[],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update: (data: Partial<FilterData>) => {},
});

const AppProvider: React.FC = ({ children }) => {
  const [rawData, setRawData] = useLocalStorage('terrace', '');
  const [data, setData] = React.useState({
    name: '',
    radius: '1500',
    categories: [] as string[],
    tags: [] as string[],
  });

  React.useEffect(() => {
    // stringify data and set raw data
    const raw = JSON.stringify(data);
    setRawData(raw);
  }, [data]);

  React.useEffect(() => {
    // only load at start
    if (rawData) {
      // parse raw data and set data
      const parsed = JSON.parse(rawData);
      setData(parsed);
    }
  }, []);

  const update = (data: Partial<FilterData>) => {
    setData((d) => ({ ...d, ...data }));
  };

  return (
    <AppContext.Provider value={{ ...data, update }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

export default AppProvider;
