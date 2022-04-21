import * as React from "react";
import {Link} from "react-router-dom"
import TableWithData from '../components/TableWithData'
import FormInputs from '../components/FormInputs'


export default function FormPage() {
    return (
        <div>
            <Link to='/'>Box Page</Link>
        <div>
            <FormInputs/>
            <TableWithData/>
        </div>
        </div>
    );
  }
  