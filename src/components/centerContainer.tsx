import { cn } from "@/lib/utils";
import React from "react";

export const CenterContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className,children, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center h-full justify-center', className)} {...props} >
        <div className='h-fit'>
            {children}
        </div> 
    </div>
))