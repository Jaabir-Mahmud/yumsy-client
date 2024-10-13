import { useState, useEffect } from "react";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
    const [menu] = useMenu();

    useEffect(() => {
        // Update the tabIndex whenever the category changes
        const newIndex = categories.indexOf(category);
        setTabIndex(newIndex !== -1 ? newIndex : 0);
    }, [category]);

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className="mb-10">
            <Helmet>
                <title>Yumsy | Order Food </title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food" />

            <Tabs 
                selectedIndex={tabIndex} 
                onSelect={(index) => setTabIndex(index)}
                className="mt-6"
            >
               <TabList className="flex justify-center space-x-4 p-4 rounded-lg shadow-lg border border-gray-200">
    {categories.map((cat, index) => (
        <Tab 
            key={cat} 
            className={`px-6 py-2 cursor-pointer rounded-lg transition-all duration-300 
                border ${tabIndex === index ? 'border-gray-300 shadow-md' : 'border-gray-200'}
                hover:border-gray-300 hover:shadow-md
            `}
            style={{
                backgroundColor: tabIndex === index ? '#f9f9f9' : 'transparent',
                boxShadow: tabIndex === index ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
            }}
        >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Tab>
    ))}
</TabList>


                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
