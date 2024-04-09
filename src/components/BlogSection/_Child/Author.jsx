import kd from "../../../assets/images/kd.jpg";

const author = (props) => {
  return (
    <div className="author flex items-center py-2">
      {/* <img src={kd} className="rounded-full w-8 h-8 mr-2" alt="User Avatar" /> */}
      <div className="flex items-center gap-2">
        <a href="#" className="text-md hover:text-gray-600 text-gray-700 md:text-[15px]">
          {props.name}
        </a>
        <span className="text-[#a0a0a0] font-[200]">|</span>
        <a href="#" className="text-md text-gray-500">
          {props.company}
        </a>
      </div>
    </div>


  )
}

export default author