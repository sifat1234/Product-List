import {ActionContext} from '../context';
import { useState } from 'react';

const ActionProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [toggledItems, setToggledItems] = useState([]); 



    return (
        <ActionContext.Provider value={{ setSelectedCategory, selectedCategory, selectedOrder, setSelectedOrder, toggledItems, setToggledItems  }}>
            {children}
        </ActionContext.Provider>
    )
}
export default ActionProvider;
