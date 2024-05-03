import React, { useEffect, useState } from "react";
import Layout from '../Layout'
import SearchComponent from '../order/SearchComponent';
import ShowCourseComponent from '../order/ShowCourseComponent';
import UserCartComponent from '../order/UserCartComponent'
import './OrderNow.css'
import stimy from "../../img/stimy.png";
import americano from "../../img/americano.png";
import indian from "../../img/indian.png";
import bangladesh from "../../img/bangladesh.png";
import arvica from "../../img/arvica.png";
function OrderNow() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'STIMY', 
          price: 499, 
          image: 'https://static.vecteezy.com/system/resources/thumbnails/012/000/309/small/coffee-bag-paper-for-mockup-free-png.png' },
        { id: 2, 
            name: 'AMERICANO', 
            price: 499, 
            image: 'https://static.vecteezy.com/system/resources/thumbnails/012/000/309/small/coffee-bag-paper-for-mockup-free-png.png'  },
          { id: 3, 
            name: 'INDIAN', 
            price: 499, 
            image: 'https://static.vecteezy.com/system/resources/thumbnails/012/000/309/small/coffee-bag-paper-for-mockup-free-png.png'},
          { id: 4, 
            name: 'BANGLADESHI', 
            price: 499, 
            image:'https://static.vecteezy.com/system/resources/thumbnails/012/000/309/small/coffee-bag-paper-for-mockup-free-png.png'   },
          { id: 5, 
            name: 'ARVICA', 
            price: 499, 
            image: 'https://static.vecteezy.com/system/resources/thumbnails/012/000/309/small/coffee-bag-paper-for-mockup-free-png.png'},
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
  return (
    <Layout>     
    <SearchComponent searchCourse={searchCourse} 
                     courseSearchUserFunction=
                         {courseSearchUserFunction} />
    <div className="App-main">
        <ShowCourseComponent
            courses={courses}
            filterCourseFunction={filterCourseFunction}
            addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCartComponent
            cartCourses={cartCourses}
            deleteCourseFromCartFunction={deleteCourseFromCartFunction}
            totalAmountCalculationFunction={
                totalAmountCalculationFunction
            }
            setCartCourses={setCartCourses}
        />
    </div>
</Layout>

  )
}

export default OrderNow