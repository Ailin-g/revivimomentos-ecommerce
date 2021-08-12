import { createContext } from 'react';

const cartContext = createContext({});

export const ProviderCartContext = cartContext.Provider;
export const ConsumerCartContext = cartContext.Consumer;

export default cartContext;
