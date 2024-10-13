import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../MenuCategroy/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    
    return (
        <div>
            <Helmet>
                <title>Yumsy | Menu </title>
                
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
           {/* Main Cover */}
            <SectionTitle subheading="Don't Miss" heading="Today's Offer">
            </SectionTitle>
            {/* Offerd menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Desserts menu items */}

            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>

            <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>

            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>

            <MenuCategory items={dessert} title={"Dessert"} img={dessertImg} ></MenuCategory>
            
            
            
        </div>
    );
};

export default Menu;