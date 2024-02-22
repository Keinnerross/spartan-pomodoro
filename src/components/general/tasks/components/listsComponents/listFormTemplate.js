import React, { Fragment, useState, useContext } from "react"
import DragTasks from "../tasksComponents/dragTasks"
import * as ListsServices from "@/components/general/tasks/components/listsComponents/listsServices/listsServices";
import { AppContext } from "@/Context/store";

const ListFormTemplate = ({ list, }) => {


    const { idUserLog, setIdUserLog } = useContext(AppContext);


    const handleInputChange = (e) => {
        const { value } = e.target;
        ListsServices.updateList(idUserLog, value, list.id);

    };


    ///AQUI DEBE HACERSE LA CONFIGURACION DE LA CREACION DE LAS TAREAS Y EL MANEJO DE LOS ESTADOS////

    return (<Fragment>
        {list ? (
            <Fragment>
                <input
                    defaultValue={list.listName}
                    onChange={handleInputChange}
                />


                <DragTasks taskDataArray={list.tasks} idList={list.id} />
            </Fragment>
        ) :
            <Fragment>
                <input placeholder="Titulo"
                    value={""} />
                <DragTasks taskDataArray={null} idList={null} />
            </Fragment>}




    </Fragment>
    )
}


/*List es false

*/


export default ListFormTemplate