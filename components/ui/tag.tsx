import { cn } from "@/libs/utils";
import { FC } from "react";

interface TagProps{
    text: string;
    active?: boolean; 
}


const Tag: FC< TagProps > = ({ text, active }) => {
    return ( <span className={cn("py-1 px-2  rounded bg-gray-light ", active && 'bg-primary text-white')}>{text}</span> );
}
export default Tag;