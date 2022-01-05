import React from "react";
import cl from "./Grid.module.scss"
import clsx from "clsx";

export const Row = ({children, js, className}) => {
    return <div style={{justifyContent: js}} className={clsx(cl.row, className)}>{children}</div>
}

export const Column = ({children, className}) => {
    return <div className={clsx(cl.column, className)}>{children}</div>
}
