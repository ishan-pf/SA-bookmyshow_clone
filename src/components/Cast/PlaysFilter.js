import React from 'react'
import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";

function PlaysFilter(props) {
    return (
        <Disclosure >

            {({ open }) => (
                <div className="bg-gray-200 my-3 rounded w-3/4 cursor-pointer">
                <Disclosure.Button className="py-2 flex items-center gap-3 pl-3 ">
                {open ? <BiChevronUp /> : <BiChevronDown />}
    
                <span className={open ? "text-red-600" : "text-gray-700"}>
                    {props.title}
                    </span>
                   
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-400 px-4 py-3">
                <div className=" w-5/6 flex item-center gap-3 flex-wrap"> 
                   {props.tags.map((item) => 
                   <>
                        <div className="border-2 rounded border-white py-1 px-2 ">
                            <span className="text-red-600">{item}</span>
                        </div>

                   </>
                   
                   )}
                   </div>
                </Disclosure.Panel>
                </div>
                )}


            
        </Disclosure>
    )
}

export default PlaysFilter

// import { Disclosure } from '@headlessui/react'
// import {BiChevronDown, BiChevronUp} from "react-icons/bi";
// const PlaysFilter = () => {
//   return (
//     <Disclosure>
//     {({ open }) => (
//       <>
//       <Disclosure.Button className="py-2 flex items-center gap-3">
//       {open ? <BiChevronUp /> : <BiChevronDown />}
//         Is team pricing available?
//       </Disclosure.Button>
//       <Disclosure.Panel className="text-gray-500">
//         Yes! You can purchase a license that you can share with your entire
//         team.
//       </Disclosure.Panel>
//       </>
//     )}
//     </Disclosure>
//   );
// };

// export default PlaysFilter;