import { cn } from "@/libs/utils";
import { FC, ReactNode } from "react";

interface ContainerProps{
    children: ReactNode
    className?: string;

}


const Container: FC<ContainerProps> = ({ children, className }) => {
    return ( <div className={cn("container mx-auto px-5 lg:px-0", className)}>
        {children}
    </div> );
}
export default Container;