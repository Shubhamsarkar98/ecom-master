import React ,{useEffect, useState}from "react"
import { Link, useLocation} from "react-router-dom";
import api from "../apiServices/api";
import { useCart } from "../context/CartContext";
export const Shop = () => {
  const location=useLocation();
  let idx=-1;
  if(location.state)
  idx = location.state;
  console.log(idx);
  const {products,setProducts,getProducts,categories,retriveBrand,brands} = useCart();
  const [data,setData]=useState([]);
  const [checkedBrands, setCheckedBrands] = useState(
    new Array(brands?.length).fill(false)
  );
  const [checkedCate, setCheckedCate] = useState(
    new Array(categories?.length).fill(false)
  );
  

  const [b_id, setB_id] = useState([]);
  const [c_id, setC_id] = useState([]);
  let para={};
  if(b_id.length>0) para.brands=b_id;
  if(c_id.length>0) para.categories=c_id;
  console.log(para)

  useEffect(async()=>{
    if(b_id.length>0||c_id.length>0){
    const res= await api.post('/products', para);
      if(res){
        setData(res.data.output.data)
      }}
      
  },[b_id,c_id])

  const handleOnChange = (id,position) => {
    const updatedCheckedBrands = checkedBrands.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedBrands(updatedCheckedBrands);
    console.log(updatedCheckedBrands)

    let new_brand_arr=updatedCheckedBrands.map((currentState,i) => {
        if (currentState === true) {
          return brands[i].id;
        }
      }
    );
    new_brand_arr=new_brand_arr.filter((i)=>i);
    console.log(new_brand_arr);
    setB_id(new_brand_arr);
  };
  const handleOnChangeC = (id,position) => {
    const updatedCheckedCate = checkedCate.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedCate(updatedCheckedCate);
    console.log(updatedCheckedCate)

    let new_cate_arr=updatedCheckedCate.map((currentState,i) => {
        if (currentState === true) {
          return categories[i].id;
        }
      }
    );
    new_cate_arr=new_cate_arr.filter((i)=>i);
    setC_id(new_cate_arr);
  };
  
  useEffect( async()=>{
    getProducts();
    retriveBrand();
    if(idx!==-1){
      checkedCate[idx.id]=true;
      para.categories=[idx._id]
      console.log(para)
    }
      const res= await api.post('/products', para);
      if(res){
        setData(res.data.output.data)
      }
  },[])
  
  
    return <>
  {/* Breadcrumb Area End */}
  {/* Shop Category Area End */}
  <div className="shop-category-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
          {/* Shop Top Area Start */}
          <div className="shop-top-bar">
            {/* Left Side start */}
            <div className="shop-tab nav mb-res-sm-15">
              <a className="active" href="#shop-1" data-bs-toggle="tab">
                <i className="fa fa-th show_grid" />
              </a>
              <a href="#shop-2" data-bs-toggle="tab">
                <i className="fa fa-list-ul" />
              </a>
              <p>There Are {data.length} Products.</p>
            </div>
            {/* Left Side End */}
            {/* Right Side Start */}
            <div className="select-shoing-wrap">
              <div className="shot-product">
                <p>Sort By:</p>
              </div>
              <div className="shop-select">
                <select className="nice-select">
                  <option value>Sort by newness</option>
                  <option value>A to Z</option>
                  <option value> Z to A</option>
                  <option value>In stock</option>
                </select>
              </div>
            </div>
            {/* Right Side End */}
          </div>
          {/* Shop Top Area End */}
          {/* Shop Bottom Area Start */}
          <div className="shop-bottom-area mt-35">
            {/* Shop Tab Content Start */}
            <div className="tab-content jump">
              {/* Tab One Start */}
              <div id="shop-1" className="tab-pane active">
                <div className="row">
                    {data?.map((prod)=>{
                      return (
                        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6 col-xs-12" key={prod.id}>
                        <article className="list-product" >
                          <div className="img-block">
                            <Link
                              to={`/single-product`}
                              state={{ id: `${prod.id}` }}
                              className="thumbnail"
                            >
                              <img
                                className="first-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

                                alt=""
                              />
                              <img
                                className="second-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

                                alt=""
                              /></Link>
                            <div className="quick-view">
                              <Link
                                className="quick_view"
                                to={`/single-product`}
                                state={{ id: `${prod.id}` }}
                                data-link-action="quickview"
                                title="Quick view"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="ion-ios-search-strong" />
                              </Link>
                            </div>
                          </div>
                          <ul className="product-flag">
                            <li className="new">New</li>
                          </ul>
                          <div className="product-decs">
                            <Link
                              className="inner-link"
                              to={`/single-product`}
                              state={{ id: `${prod.id}` }}
                            >
                              <span>Brand: {" "}{prod.brand?.name}</span>
                            </Link>
                            <h2>
                              <Link
                                to={`/single-product`}
                                state={{ id: `${prod.id}` }}
                                className="product-link"
                              >
                                {prod.name}
                              </Link>
                            </h2>
                            <div className="rating-product">
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                              <i className="ion-android-star" />
                            </div>
                            <div className="pricing-meta">
                              <ul>
                                <li className="old-price">
                                  ₹
                                  {
                                    prod.product_variations[0].variations[0]
                                      .sell_price_inc_tax
                                  }
                                </li>
                                <li className="current-price">
                                  ₹
                                  {
                                    prod.product_variations[0].variations[0]
                                      .sell_price_inc_tax
                                  }
                                </li>
                                <li className="discount-price">-5%</li>
                              </ul>
                            </div>
                          </div>
                          <div className="add-to-link">
                            <ul>
                              <li className="cart">
                                <a className="cart-btn" href="#">
                                  ADD TO CART{" "}
                                </a>
                              </li>
                              <li>
                                <a href="wishlist.html">
                                  <i className="ion-android-favorite-outline" />
                                </a>
                              </li>
                              <li>
                                <a href="compare.html">
                                  <i className="ion-ios-shuffle-strong" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </article>
                        </div>
                      );
                    })}
                </div>
              </div>
              {/* Tab One End */}
            </div>
            {/* Shop Tab Content End */}
            {/*  Pagination Area Start */}
            {/* <div className="pro-pagination-style text-center">
              <ul>
                <li>
                  <a className="prev" href="#"><i className="ion-ios-arrow-left" /></a>
                </li>
                <li><a className="active" href="#shop-1">1</a></li>
                <li><a href="#shop-2">2</a></li>
                <li>
                  <a className="next" href="#shop-2"><i className="ion-ios-arrow-right" /></a>
                </li>
              </ul>
            </div> */}
            {/*  Pagination Area End */}
          </div>
          {/* Shop Bottom Area End */}
        </div>
        {/* Sidebar Area Start */}
        <div className="col-lg-3 order-lg-first col-md-12 order-md-last mb-res-md-60px mb-res-sm-60px">
          <div className="left-sidebar">
            <div className="sidebar-heading">
              <div className="main-heading">
                <h2>Filter By</h2>
              </div>
              {/* Sidebar single item */}
              <div className="sidebar-widget">

                <h4 className="pro-sidebar-title">Categories</h4>
                <div className="sidebar-widget-list">
                  <ul>
                    {categories?.map((cate,index)=>{
                      return(<li key={cate.id}>
                        <div className="sidebar-widget-list-left">
                          <input type="checkbox" 
                           name={cate.name}
                           value={cate.id}
                           checked={checkedCate[index]}
                           onChange={(event)=>handleOnChangeC(event.target.value,index)}/>
                          
                          <a href="#">{cate.name} </a>
                          <span className="checkmark" />
                        </div>
                      </li>)
                    })}
                  </ul>
                </div>
              </div>
              {/* Sidebar single item */}
            </div>
            {/* Sidebar single item */}
            <div className="sidebar-widget mt-20">
              <h4 className="pro-sidebar-title">Price</h4>
              <div className="price-filter mt-10">
                <div className="price-slider-amount">
                  <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                </div>
                <div id="slider-range" />
              </div>
            </div>
            {/* Sidebar single item */}
            <div className="sidebar-widget mt-30">
              <h4 className="pro-sidebar-title">Brand</h4>
              <div className="sidebar-widget-list">
                <ul>
                  {brands?.map((brand,index)=>{
                    return(<li key={brand.id}> 
                      <div className="sidebar-widget-list-left">
                        <input type="checkbox" 
                        name={brand.name}
                        value={brand.id}
                        checked={checkedBrands[index]}
                        onChange={(event)=>handleOnChange(event.target.value,index)}/> 
                        <a href="#">{brand.name}</a>
                        <span className="checkmark" />
                      </div>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
            {/* Sidebar single item */}
          </div>
        </div>
        {/* Sidebar Area End */}
      </div>
    </div>
  </div>

  </>;
};
