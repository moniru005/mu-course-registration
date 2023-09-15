import PropTypes from 'prop-types';
const Cart = ({ selectedCourses, remaining, totalCreditHour, totalPrice }) => {
  return (
    <div className='lg:w-72 md:w-72 bg-white rounded-lg p-4'>
      <h2 className='text-blue-600 font-bold '>Credit Hour Remaining {remaining} hr</h2>
      <hr className='mt-2'></hr>
      <div className='mt-4'>
        <h1 className='font-bold'>Course Name</h1>
        <div className='mt-4'>
          {selectedCourses.map(course => 
            <li className="list-decimal text-gray-500 text-sm leading-7" key={course.id}>
              {course.title}
            </li>
          )}
          <hr className='mt-4'></hr>
          <p className='mt-2 text-gray-500 text-[15px] '>Total Credit Hour: {totalCreditHour}</p>
          <hr className='mt-3'></hr>
          <p className='mt-2 text-gray-500 text-[15px] font-bold'>Total Price: {totalPrice} USD</p>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes ={
    selectedCourses: PropTypes.array,
    remaining: PropTypes.number,
    totalCreditHour: PropTypes.number
}
export default Cart;
