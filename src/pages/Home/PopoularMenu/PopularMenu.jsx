
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')



  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subheading="Popular Items"
      >
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {
          popular.map(item => (
            <MenuItem key={item._id} item={item} />
          ))
        }
        <div className="md:col-span-2 flex justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View Full Menu
          </button>
        </div>
      </div>

    </section>
  );
};

export default PopularMenu;