import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
        <div className="md:col-span-2 flex justify-center">
          {/* Check if title is defined before using it */}
          <Link to={title ? `/order/${title.toLowerCase()}` : '#'}>
            <button className="btn btn-outline bg-slate-400 border-0 border-b-4 mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
