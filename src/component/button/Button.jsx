

const Button = ({title}) => {
    return (
        <div className="my-3 ">
            <button className='bg-blue-500 text-white font-semibold hover:bg-blue-700 px-5 py-2 rounded-lg duration-300'>{title}</button>
        </div>
    );
};

export default Button;



export const DubleButton = ({title, title2}) => {
    return (
        <div className="my-3 flex items-center  justify-center sm:justify-normal flex-wrap gap-2">
            <button className='bg-blue-700 text-white font-semibold hover:bg-blue-500 px-5 py-2 rounded-lg duration-300'>{title}</button>
            <button className='bg-blue-500 text-white font-semibold hover:bg-blue-700 px-5 py-2 rounded-lg duration-300'>{title2}</button>
        </div>
    );
};

//   DubleButton;