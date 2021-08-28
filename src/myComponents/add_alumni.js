import React from 'react';
import "./add_alumni.css"
function AddAlumni(){
    return(
        <div className="Add_item">
        <div className="form" id="form">
            <form action="" id="form2">
<div class="cont">
            <div id="" class="form-contro">

                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Current Postion</label>
            </div>
            <div id="" class="form-contro">
                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Research Field</label>
            </div>
            <div id="" class="form-contro">
                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Work Experience</label>
            </div>
            <div id="" class="form-contro">
                <input type="text" name="" id="username" autocomplete="" required />
                <label for="text">Worked in</label>
            </div>
            <div id="" class="form-contro">
                <input type="email" name="" id="username" autocomplete="" required />
                <label for="email">Email</label>
            </div>
            <div id="" class="form-contro">
                <input type="number" name="" id="username" autocomplete="" required />
                <label for="number">Phone Number</label>
            </div>
                </div>
        </form>
        <div className="add_item_button">
        <button type="submit">Back</button>
        <button type="submit">Submit</button>
        </div>
        </div>
        </div>
    )
}
export default AddAlumni