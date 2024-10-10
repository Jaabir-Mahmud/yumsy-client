import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle heading="Featured Item" subheading="Check it out"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laboriosam, inventore eius provident accusantium in laudantium saepe deserunt? Rem ipsa quam ipsum numquam quos? Repudiandae quasi, ullam maiores eligendi vero, qui a nisi, explicabo quam architecto modi soluta est doloribus.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
        
    );
};

export default Featured;